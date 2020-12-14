# Description

 `VectAlign` (a.k.a. VectorDrawableAlign) is a developer's tool which automagically aligns two VectorDrawable "pathData" strings (or SVG images) in order to allow morphing animations between them using an AnimatedVectorDrawable. this package is vulnerable to `(XXE)`.

https://github.com/bonnyfone/vectalign

# :recycle:  Steps To Reproduce-:  
  0) download and run https://bintray.com/artifact/download/bonnyfone/maven/vectalign-0.2-jar-with-dependencies.jar
  1) creat a payload svg or use : (this is a example of External Xml Inclusion )https://drive.google.com/drive/folders/1CLc0cYmz6Q-CGnMpDnupx7YTjNzo8Eir?usp=sharing
# :male_detective: POC
  [gdrive](https://drive.google.com/file/d/1VqfAgldmtY-qrgHRfizVvAH2oIFZVT-q/view?usp=sharing)
## 💥 Impact
DOS or Denial of service
LFI or local file inclusion (as in the POC)
RCE 

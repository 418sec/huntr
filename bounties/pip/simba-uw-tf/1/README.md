# :dizzy: Description:
- SimBA is a plug-and-play pipeline and GUI for developing supervised behavioral classifiers. And it's vulnerable to remote code execution when adding new video due to Unsafe YAML loading using FullLoader. That allows remote code execution by importing Malicious YAML file then try to add video with it.

# :ok_hand: Steps To Reproduce:
- Install simba, `it was really painful to install it.` then open it from your windows machine.
- Create a `config.yaml` file then add this content inside of it:

```yaml
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc')"
```

- Open Simba. Click on tracking, then Load DLC Mode.
- On the first tab. select `config.yaml` then from the second tab click add new video.
- Wait for it. then you will see that the calculator started to run. 

# :boom: Proof Of Concept:
- Here's a Proof Of Concept Video, Uploaded On [Google Drive](https://drive.google.com/file/d/1QEThGqcsg2mlSbxyW9oB3YoQAqAID_ml/view?usp=sharing)

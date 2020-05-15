# Overview

An invalid png can lead to remote code execution on a victims computer, this is because the reader does not check if the size is invalid leading to an overflowed buffer on the bss stack.

# Proof of Concept

1. Create png with shellcode (this png will cause the crash https://drive.google.com/file/d/1mDAhQntWLGZlDN9FrR0zGAylI7yJ7yWL/view?usp=sharing) 
2. Use it as the input to pngdefry 
3. Pop a shell
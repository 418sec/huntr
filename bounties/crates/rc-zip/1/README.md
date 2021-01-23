# :book: Description


 `rc-zip` Pure rust zip & zip64 reading and writing. this package is vulnerable for `zip-slip`

https://github.com/rust-compress/rc-zip
https://crates.io/crates/rc-zip

# :recycle:  Steps To Reproduce-:  
  0) download and run latest release from https://github.com/rust-compress/rc-zip 
  1) run by 
  ```
  git clone https://github.com/rust-compress/rc-zip
  cargo build samples/jean/src/main.rs
  then run by ./target/debug/jean unzip slip.zip
 ```
[slip.zip](https://github.com/snyk/zip-slip-vulnerability/raw/master/archives/zip-slip.zip)

# :telescope: POC

[poc.png](https://drive.google.com/file/d/1v8MnK7eACsvFnZKPKypVREOKvLXzDEJa/view?usp=sharing)

## 💥 Impact

arbitrary file overwrite

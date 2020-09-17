# Description
This is a Keras implementation of a CNN for estimating age and gender from a face image [1, 2]. In training, the IMDB-WIKI dataset is used. This package is vulnerable to Man in the Middle (MITM) attacks due to downloading resources over an insecure protocol. It is possible for an attacker to intercept and alter the packages which may leads to RCE / other attacks which may help the attacker gain access to host.

# Lines :
* https://github.com/yu4u/age-gender-estimation/blob/master/lap/create_lap_dataset.py#L74
* https://github.com/yu4u/age-gender-estimation/blob/master/lap/create_lap_dataset.py#L14
* https://github.com/yu4u/age-gender-estimation/blob/master/lap/create_lap_dataset.py#L15
* https://github.com/yu4u/age-gender-estimation/blob/master/lap/create_lap_dataset.py#L16
* https://github.com/yu4u/age-gender-estimation/blob/master/lap/create_lap_dataset.py#L17
* https://github.com/yu4u/age-gender-estimation/blob/master/lap/create_lap_dataset.py#L18

# Referance
* [onetwoseven](https://0xrick.github.io/hack-the-box/onetwoseven/) , its a box in HTB which demonstrates gaining access to the target with insecure file download.

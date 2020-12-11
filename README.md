# Fmbark

<img width="1232" alt="Screenshot" src="https://user-images.githubusercontent.com/2878349/101948521-3794d000-3c03-11eb-9076-070841fba738.png">

This plugin mimics [Emark plugin Extension for Chrome](<https://chrome.google.com/webstore/detail/embark-new-tab-page/aeajehgeohhgjbhhbicilpenjfcbfnpg>). The difference that this extension **doesn't** contain any external dependencies or requests, except the Roboto font loading. And it works on **Firefox**.

I asked the author of the original Embark about his port to Firefox in 2017, but it's still not a thing. So, I've decided to make my own. This plugin has a subset of options that I prefer to use, but all PRs are welcome.

I didn't publish it on Firefox Extensions, but you can submit it as self-distributed on [Mozilla's Add-on Developer Hub](<https://addons.mozilla.org/en-US/developers/addon/submit/distribution>). If you want to see it as a common extension, feel free to create an issue about it.

Photos of mountains are from [Unsplash](<https://unsplash.com/>). Kudos to their authors.

# How to build
`yarn && yarn build`

# Prepare images
`mogrify -geometry x1080 *.jpg`

const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png",
  "https://i.pinimg.com/736x/1f/ea/fd/1feafd61218dee18157063f90680b205.jpg",
  "https://i.pinimg.com/736x/38/cf/f6/38cff6100255ffb725cf7283df1968fc.jpg",
  "https://i.pinimg.com/736x/84/d8/77/84d87711076150c59bd71af086f2b3fa.jpg",
  "https://i.pinimg.com/736x/ce/06/c3/ce06c305e5e47a1bb1047df3469e3222.jpg",
  "https://i.pinimg.com/736x/00/5b/4f/005b4f9314a589e69fd17a7b82cc4b92.jpg",
  "https://i.pinimg.com/736x/95/d1/b4/95d1b412ac2dacb94282aadf245d53be.jpg",
  "https://i.pinimg.com/736x/6e/42/a9/6e42a90e6d19a027a19b85e9c388fe5e.jpg",
  "https://i.pinimg.com/736x/7a/63/b8/7a63b83caaffb35c14300e358a617722.jpg",
  "https://images.cdn-files-a.com/uploads/1918596/800_5c677085bc984.jpg",
  "https://images.cdn-files-a.com/uploads/1918596/800_5c678080c0d1d.jpg",
  "https://images.cdn-files-a.com/uploads/1918596/800_5c678080c0d1d.jpg",
  "https://images.cdn-files-a.com/uploads/1918596/800_5c6f7c7d6b139.jpeg",
  "https://images.cdn-files-a.com/uploads/1918596/800_5c6f7cbca7484.jpeg",
  


];

const captionArray = [
  "When you open the fridge and forget what you wanted. Just vibes.",
  "Me trying to get 8 hours of sleep in 3 hours.",
  "That one chair in my room holding 94% of my wardrobe.",
  "Accidentally hit Reply All — now I live in the woods.",
  "Me: I should go to bed early. Also me at 3am: How do jellyfish sleep?",
  "404: Motivation Not Found.",
  "Me pretending to work while actually just resizing the browser window.",
  "Overthinking a 2-word text like its a breakup letter.",
  "Me, hyperfocused on organizing paperclips instead of doing my actual job.",
  "Cannot be toxic if you are emotionally unavailable.",
  "Me: I should go outside. Brain: You will just get sunburn and regret.",
  "My last two brain cells doing the Macarena during a crisis.",
  "I do not always lose things.. but when I do, it's the things I am holding",
  "That moment when you laugh, then immediately wonder if that was your last bit of serotonin.",
  "I am not dead inside. There is just a long wait list",
  "They said follow your dreams - I went back to bed",


];

const randomMeme = document.getElementById("random-meme");
const randomCaption = document.getElementById("random-caption");
const generatorButton = document.getElementById("generator-button");

  generatorButton.addEventListener("click", function() {
  const randomIndexMeme = Math.floor(Math.random() * memeArray.length);
  const randomIndexCap = Math.floor(Math.random() * captionArray.length);

  randomMeme.src = memeArray[randomIndexMeme];
  randomCaption.innerText = captionArray[randomIndexCap];
  


});
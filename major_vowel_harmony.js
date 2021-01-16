const isHasMajorVowelHarmony = (word) => {
  const hardV = "aıou";
  const softV = "eiöü";

  let isHLetter = false;
  let isSLetter = false;
  for (var i = 0; i < word.length; i++) {
    if (hardV.indexOf(word[i]) !== -1) {
      isHLetter = true;
    }
    if (softV.indexOf(word[i]) !== -1) {
      isSLetter = true;
    }
  }
  if (isHLetter && isSLetter) return false;
  else if (isHLetter || isSLetter) return true;
};

export default isHasMajorVowelHarmony;

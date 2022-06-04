function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log("my name is ", name);
    }
  };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', ' Mr. White'];

var suspectList = [];
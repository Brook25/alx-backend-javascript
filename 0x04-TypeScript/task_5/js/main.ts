interface MajorCredits {
  credits: number;
  __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  __brand: "MinorCredits";
}


function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return { credits: subject1.credits + subject2.credits, __brand: "MajorCredits" } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return { credits: subject1.credits + subject2.credits, __brand: "MinorCredits" } as MinorCredits;
}

/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the
"instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have
function with one side of the DNA; you need to get the other complementary side. DNA strand is
never empty or there is no DNA at all.
*/

function DNAStrand(dna){
  let complementaryDNA = ''

  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      complementaryDNA += "T";
    } else if (dna[i] === "T") {
      complementaryDNA += "A";
    } else if (dna[i] === "G") {
      complementaryDNA += "C";
    } else if (dna[i] === "C") {
      complementaryDNA += "G";
    }
  }
  return complementaryDNA;
}

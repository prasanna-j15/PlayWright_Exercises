/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

/*
let sentence="My name   is   pRasaNNa";

let count=lengthOfWord(sentence);
console.log("Last word length is : "+count)

function lengthOfWord()
{
    let count =0;
    for(let i=sentence.length-1;i>=0;i--)
    {
      if(sentence.charAt(i)!==' ')
      {
        count++;
      }
      else
      {
        if(count>0)
        {
            return count;
        }
      }
    }

}
*/




let str1="silent";
let str2="listen";
 str1=str1.toLowerCase().split("").sort().join("");
 str2=str2.toLowerCase().split("").sort().join("");
if(str1 == str2)
{
    console.log("The given string is anagram")
}
else
{
    console.log("Not anagram")
}

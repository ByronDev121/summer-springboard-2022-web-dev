// Variables

// var firstName = "Byron";

// const lastName = "de Villiers";
// lastName = "Smith";
// const lastName;

// let age;
// age = 42;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// Data types - primitives:

// String
let firstName = "Byron";
let lastName = "de Villiers";
let address = "11 Zinnia";

// Numbers
let age = 29;
let rating = 4.5;

// Boolean
let isCool = true;

// null
address = null;

// undefined
let hairColor;

// Not a primitive:
// Object

// Concatenation:

console.log("My name is " + firstName + " and I am " + age + " years old");

console.log(`My name is ${firstName} and I am ${age} years old`);

// Strings

let s = `My name is ${firstName}`;

console.log(s.length);

console.log(s.toLocaleUpperCase());

s = s.toLocaleUpperCase();

s.indexOf("Y", 2);

s.substring(0, 7);

s1 = s[0];

s2 = s[8];

console.log(s1, s2);

// Arrays:
let nums1 = new Array(1, 2, 3, 4, 5, 6);
console.log(nums1);

let alphaNumeric = [1, 2, 3, 4, 5, "a", "b"];
console.log(alphaNumeric);

let fruits = ["orange", "pear", "apple"];

fruits.push("strawberries");
fruits.unshift("grape");

const lastFruit = fruits.pop();

const index = fruits.indexOf("orange");

console.log(fruits[2]);

// Objects

let person = {
  firstName: "Byron",
  lastName: "de Villiers",
  age: 29,
  hobbies: ["golf", "surfing", "sport", "music"],
  address: {
    street: "Zinnia",
    city: "Potchefstroom",
    province: "North West",
  },
};

person.email = "byron@mail.com";
person["email"] = "byron@mail.com";

console.log(person);

// For:

console.log("starting for loop");

for (let i = 0; i <= 10; i = i + 1) {
  console.log(i);
  console.log("execute this line if code in the for loop");
  // i = i + 1
}

console.log("for loop finished");

// While
let i = 0;
while (i <= 10) {
  console.log(i);
  console.log("execute this line if code in the while loop");
  i++;
}

console.log("\n \n \n");

const todos = [
  {
    id: 1,
    title: "take out the trash",
    completed: true,
  },
  {
    id: 2,
    title: "feed the dogs",
    completed: false,
  },
  {
    id: 3,
    title: "go to the bank",
    completed: true,
  },
];

for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];
  const doneText = todo.completed ? "" : "not";
  console.log(`${todo.title} task is ${doneText} completed`);
}

console.log("\n \n \n");

for (let todo of todos) {
  const doneText = todo.completed ? "" : "not";
  console.log(`${todo.title} task is ${doneText} completed`);
}

console.log("\n \n \n");

todos.forEach((todo) => {
  const doneText = todo.completed ? "" : "not";
  console.log(`${todo.title} task is ${doneText} completed`);
});

const num = 10;

if (num == 10) {
  console.log("num = 10");
} else if (num > 5) {
  console.log("num > 5");
} else {
  console.log("num < 5");
}

const lessThanFive = num < 5 ? true : false;

console.log(lessThanFive);

console.log("\n \n \n Functions");

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const result = addTwoNumbers(5, 4);
console.log(result);

const array1 = [10, 2, 5, 4, 8, 6];

console.log(
  array1.filter((x) => {
    return x == 1;
  })
);

console.log(
  array1.sort((a, b) => {
    return a - b;
  })
);

function logDate() {
  console.log(new Date());
}

logDate();

function isPerfectSquare(x) {
  const sqrRoot = Math.sqrt(x);
  return sqrRoot * sqrRoot == x;
}

console.log(isPerfectSquare(7));

console.log("\n \n \n Are TODOS Done: ");

if (false) {
  console.log("if executed");
}

function areTasksDone(todos) {
  for (let todo of todos) {
    if (!todo.completed) {
      return false;
    }
  }

  return true;
}

console.log(areTasksDone(todos));
todos[1].completed = true;
console.log(areTasksDone(todos));

// ID,
// title,
// description,
// author,
//  date.Created and
//  img URL (hopefully we'll have enough time to use firebase firestorage to save all the images for our web app).
// You'll also notice that the blog post object defines a
// content property which is an array of objects that defines each section.
// Each section is defined by the Section Header, Section Text ( Section paragraph )

const blogPosts = [
  {
    id: 1,
    title: "blog 1",
    description: "New Blog post",
    author: " Byron",
    dateCreated: new Date(),
    imgURL:
      "data:image/jpeg;base64,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",
    content: [
      {
        sectionHeader: "Intro",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        sectionHeader: "Body",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        sectionHeader: "Conclusion",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 2,
    title: "blog 2",
    description: "New Blog post",
    author: " Byron",
    dateCreated: new Date(),
    imgURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRIVFhUYGBIYGBEYGBgYGBgYGBgRGBgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0QC40NTEBDAwMEA8QGhISHjYrISE0NDQ0NjY0NDQ0NTQ0MTQ0NjQ0NjQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQxNDU0NDE0NP/AABEIAKwBJgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAIBAgQDBAgFAwMFAAAAAAABAgMRBBIhMQVBURNhgZEGFCJxobHB0TJSYpLhI0LwBxVyJDNDwvH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKhEAAgEDBAIBAwQDAAAAAAAAAAECAxESEyExQQRRFCJSkTJCYbEFgaH/2gAMAwEAAhEDEQA/APGgAWxokAgoAVYQALYLDxAQBRQxAaA4B2ASwWHAPEBtgsOCwYjG2Cw6wWHiAlgsLYLBiAlgsLYWwYgMFsOsJYMQEsJYfYSwYgNsFh1gsLEBthB9gFiA0QcFhYiGgOsJYMQEAWwgsQEAUQVgABbAFhgA6wWLUQEsKLYVRKUQsIkK4jlEliisS4xuV7BYnlAYolKInFoZYLEuUMpeAYkeUWxJlFyhgPEhyi2JsoqgGAYkFhcpP2YdmPAeJBkFyk6gKoBgPAr5QyljIGQWAYFfKGUs9kHZBgPArZQylnsgyBiGBWyiZC12QnZjwFgVnEblLLpiOmLATiV3ESxO4DXEMCXEhsFiVxGtEuArEYhI0NsTiSxtgsOsSQilq/IhxGldkagISuXQQizLshg7KO0ELUgxBIdGIRRIkaKxUYgokkNN0ESxTh129xokmaxi+htovkNjQvsWXh+jEVJotRtwaON+UVXTDsy6qdx0aJsok6ZSVMXszQ9XDsB4D0mUFTHKkXlRHKiGA1SM9Uh6ol5UR6oCwLVIz1RFVI0VhglQsGI9Iz+yGzgasKFwlg9AxB0TIhAmVIuxwr00LMML3A4gqTMnsA7A2vVBPVSbIekY3YCzw9rdTZWFtqJPC31CwaWxhuiRypGzPClTEJR05lWIlTsZsoWI1AsVYtk1HC6XexHL2M1C7KXZEUoGnUplSokh6fbInCxTlEY0S1GMS6mcrLYwa3CEW9ETyoKLtu+4SOn8E1Lba31MJG0ILvkh7O/L6gXtVu7LloBz7nRpxMVMcmMHIaOFD0PjIjTHpFxkaR/gkU+hYpYmxWUUOS7y1I0jKSNSjVTL9KkpbSXjp8zBhJrkX8Ni7WumaxqNHXSnG9pGjLC25CxolrCcRg99H/nQkqVIt3SVuqW/gdFOalyrHY6ULZRdyPDU09JIfXwsU/ZJaUU9tSzCD6M0ezuWopxtYzHhX0BYc2I0b8h6woZEaaMeOHJY4c1VhB0cKLMemZccOSLC35XNWGFJoYUlyGoWMVYS1rKxMsKbEcKSxwpm5jcUznqmGkpKyVmWo4TuNn1VPkPWG7hOZGJixwye2oeqdxs0sEoqy21fix/qonMWJheqdxJHh999C86bz2tpy+5ep2S2u3t/LM51GuCnCyucjxOmoeytZc7fI5jEQebU7zimEjBOc99Wurb1OXr4VKOeTyt3ajz7jWFTKJNWjeN0ZdKKvtp3j8TiVFWW5DJyvZc7EFRa68jZSSR57k0mkQyxMiCdRssuN+XXTuInTsQ5M5pRk+xI0XZN89kPjQbu3eyEjVy/TlZ9SKriW+ZEmrCvGPJZU4x5Zn0vZX7xFirO/Pklt4lHMI2c8mg1X0WquLb3e7v4gUgMbCdaQ4WxdeEl+X4DXQa3RNzXRkVUhUWVhxfV5LkPIFSkQRRJAnpw6xv8C7RoUpaPNB96Ulf5izsbQoN8MowaJ4pGhHhSezTX6Wm/LdBHh1udv+URqqjpXi1FyirCn32LVGM1s7kscD0cfB2+ZLDCzjyfgWqxvDx5LosYeT0urd5u4aN1o0179TJo4STV83mizDBTWqfimzWNe/Z3RpSS3RuQpk6o3MihiqkHZ+171r52RuYWedX1XkU6qE4NK42OHHrDdwuJxUaaTk4qPOTail4vQir8ewsIdo68HHZZZKUnLooxu7mbrW2MZzjH9TJ44YkjQMmh6Y4KWX+q4t6WlCatrZZmlZJ73v5E+N9KMLSyt1M8HOcHKGWSjKL1TWZSa3tJJp231QtZezH5ELXuaaoj1RORxv8AqHRhNKlSlUp6Xk3kfO6SafcVI/6k2cv+nutMrz2f4rtOy2UbpPqk30M3WXszl5MEd4qI9UTk8D/qLhpRk6kKlOok2oxSnGWuijLTX/kku86PhPpBhMRZU68M10sk3klmdtFGdnLflcNRMleRB9lrsQ7Iudlze31K0aeRuUp3Vra9QzLU0yJYVJ5nv0+5DOi1eSW19+pbrYiEVdyVt0k934ctjCxfF1NSilzt4c2uSErs2pxnJmfxKpHM3K8562jFX9rld7HM8QzyesGm9lq2dHXxEIJZXbR3SXNmLise/wC1W5d5005PpHTVjHCzZh1KbX9upTy9xoyotttsp1KRupHj1IPlIicklo9db8ipUl0LkcHKXIsLhMsua2l2m2rJPfdilUSMtGpJbIw5LUZJWLtTRtRv0InR15syd2ckqb6KrYt9LW8SzKEVyK7ZnIlxceRLIBgGdibneQwcbWtfwt8h3qEXuvkYS4hWjpKUk+jX3RZpcXqdU/BHJufUx8ig9nF/g1P9ojyt5D4cL/T9SvQ42/7orw0NCjxim91JeF/qTJyOiPx5bqwyPCk+XwQkuCR/K7+PzNOjxCnLaXwaL1OpF7NPxRKduTRxg+EjmXw9R3TT73cs0aHSTfc1c6TKnuk14Mhnw6nL+3K+sdPhsJyT7FGUYvgy4YaD/FHxSaLNDAw2Ta7i0sBFbSkvj9R9OFn+KT8JCzaKlOPMeQpcOXW/miSngUpXUrdz1RJVoxlG2mblfMipSWWSUox80Uqi6MspST3NNYOL3im/qYfpVxt4KNKMcuebd1KOa1NLV5U073ste/oWvSfiqoYaco3jOSywlBRaU3tdva6TWx4/XxU6ls8nJqyTcm7JXsld2S1NYybR4/l+XKP0Lk0+I+kFerdSqOUXJy1jGN9brS2iWns3aMpR17nfXuvvYjaJYa31ta1u8GeZlKT+p3Fi99fd4Pcmklf2durVn335bjqNFppSWVNN3ldLVOz+RZp4Zbc7rW6y295DlY3p02yooX3HQwzle1tE3rJR0UW2ldq7stt3stTTlg7W1T0i7x1smk7ctVfXvRBVo5WnZaW31TfUlTRvPx5JXsZUov8Azn5jJcjTrQlaMnBKKTs3G0X7K5820k0urvzM+dk/F968Llp3OOcbF2lx7EwSjHEVlFZLJVJ29hWjpfZLS2x1/B/TGtiH2dR+29Fljo093K2it4LU4CMbuy3b0STevRIsYaDjJ/1OznF2X4k821rr8PvZopWHRrSpSTXB6VJxtq3KXiMUna20SvwKu8TTzXjdNKWVNKLe17+57X2OppcCgoqUqita+kopfFq5TqpH0utTwjJPZnLzoPv+DZG+HSla0Xvo9l/J1Hb4enHLFOUucrR+F7pFerxGDVlHS1rey2vc9BfIl0g/X+12MKHCG2o2fO738kiZcBhH2qk4xjdbyTbXuRcqcSjFWirL33v773MjE4pTd5Rv0V0l8jSNScv4CUIrpf2SSrYenfs7zn1cZJd9r2fxRQxdSUk4qChTbvl0u5dZPyHzxiivZhBPxk/NmXisVOW689PgaRTOetUjGNr/AIRTryabs0lz2v52K+Irt+7yCpFshlTNbnkTb3sQzkRMmlAikjNs5pJjABgRcysb8OLT55X70idcST/FSi/BX+RjxTJopnM4o9ePkVPZpvEU3/4rP/k/kLCpG34deWpRhcmg2PFGsarb3/ovU6li7RxXX5v+TIVVLmSwrobhc6KdfHs6LD4ro/jH6xRbjxCa5XXuj9GczDER6k0cUls7GbpHWq8HydNT4rL8v+eDL1HH33S+P1RycMf+p+bLNPiH6n5/yZypPoq9OR1M6kJK8rfX7kU6FKa3V+ul/ijEhjv1Mswxq6/BGbpyQKn9rOf9JeGynWVCEqkoycJOOR5ItQeWUZPTX2lura7jaHoPHJ7db+o8rUI5W1B3spJ87J67J9dzoo1lmcs8neSlZvS6g4aLpZ7dVcmeJvJScr2UtLLVtxabdr6ZfiW3JJJHBL/HucnKW7b/AOHFL0YnKVSNKnNVItqSnKi4RgrW9vM803aV0lo9LEFX0eqKMMmSUpQVVrMoThG9kowz6qT29lO6StHY9DhjrfPxfP3iYbEqEYxTbSVrtRzNcrtW22JdWXoyf+LaezPM6eJnkhCpG8I51C8FG09U7zUbzs3s29raIt0aKjltOMoyu8sW242ema6Wtua+B1HGeFRqQn2bcHK8nTsnTlNa3in/ANuT5tWvzMvh9bCVIZaq7HERTjeKcYykrWlJJWUtLO6S38CUrq6RMKEqUkp/6Ol9GOC4fEQl/WyVYJtxqRg4tNW/C9HHvvc5LjOVSeXJaLmlKF8ktXZpS5dOu5DHEqyva9vfqX+DVKkpVOzoU611GL7TLljd30zNdO/YySa3OlpfV9V78L0YNKk53cpT7GGTO4tOyzKKUU3a/tO3Qt0+BxnCc8yjCLlGCUbzc82WPa3tl0V2r6LW251i4fi51FUlLDQaioxsqk+zV7twj+HNLRN32SL74BGcX2mKqVKkk9ValCLa3UYr47205s21EuzhdBu94tnlWP4bUpSlCSvJXukm7W5vTTx+pHg8FOo5KNOUnFXlli24pJ3066fBnrkfRfBx7VSlWblktPtHJz1zVHUj7P4pJXTk07J6WSRhuF4ejUqVacqjm5ucU21FXjlSlFNKVtdWm9S9ZW23OWPh1JS2VkZfCqDhFLJlvCn7Tl7U3Zt545VZpvnf8XvJpqTLtWTk23uV5wFF33Z9PRpqEFErKCT9uSt0Wo54inHaKv3pv+BsqfcQzpPoa7PktxfRDXxN72SXuikZ9Woy9Oj7xnqbf8msZRiYSpzkZMv81I3T7jXnhYp2b17lJkVXDpc3+1/MrWRzy8WXLMWpRff5ledM2Jwj3lStBdPMamcVSjYyJ0yKUC9VS6laoPI4pQSKriBI/ECbmOKI1iX3D1jJd3kVQFZGGpL2WZYuT6CLEyIBSkkPUn7LCxUu7yJI4uXd5FUVFpIFUn7Lixsu7yHLGS7vIpIeh2Raqz9l6ONn3eRJHHT7vL+SimPTKxXo0jXn7ZpQ4lNc15P7lmPGKnSH7X9zIiyWDE4x9HRDyKq/czZhxaf6f2v7lqHEZ/p/a/uYcJFqnUM5Qj6O2l5FR8tmwsfPqv2/ckhjpvmv2ozITJqdQycF6OyFaT5ZqwxU+qfgvoY/pBh4OEqtss7x/DopNtbrrvqXozMb0nr/ANOEesm/2q3/ALGTih+XOOi29zG9YOl9FuITyTjdZYuLSaWma99d3scbnN30XxFpTi+cU/J/yLBHk+JXtWjd7HZviE1tby/kilxeoucfJ/cpzmVp1Co04vo9mpO3BpT4xV6x/a/uQT4xU/R+1/cz3VIpzNY0oejklWa4Zdnxyr1h+1/chlx2t1h+1/cz5yIZGypw9HJLyavTZoT43V6x/a/uRT4zV6x8n9yjNEUgwj6M5eVW+5l2XFqv5l5P7kUuK1PzL4/cqSRHIHGPozfk1fuZdfF6v5/n9yKXF6v5vn9ynIjkTjH0Zy8mr9z/ACWZcSqP+75/chni5vmiBjZBZGMqs3zJkjxL7hjryI2NYmZucvY/tWAwCSc5ewAQUBAKILcq4hyFQy45SQ1JDHofEi7RB2vcPNFJosRHxKyxHcHrL5IWaKUki9Dz8CWPuZkutLqxmd9fiJ1C1VS6N3MLPFxju/BamDmfUQhzZfymuEbn+6wXJvwQf71FbRb99jDAV2Hy6vTNmfHp65UktbX1fcUMVjZ1LZpN22XJe5FULkmc69SatJsW4KQgBYzuWY4yad1OXm9iWlxSpF3vffSWu5RAClVmuGzTXGJ22XkPjxfrHpz8zJApSZWvU9m4sdTfO2l9V8BfWIPW6/8AphBcrNj+RLs3cyd7PyaYk0YkZtbMmjiZLnflqNTHrJ8o0ZEckVFjHzSHetLo/MMkGcWSyRHIR4hd42VVBkS5ISQ2QrkhrYXIY1jRzGsLksAEAm4hAuAE3AAABAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
    content: [
      {
        sectionHeader: "Intro",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        sectionHeader: "Body",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        sectionHeader: "Conclusion",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    id: 3,
    title: "blog 3",
    description: "New Blog post",
    author: " Byron",
    dateCreated: new Date(),
    imgURL:
      "data:image/jpeg;base64,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",
    content: [
      {
        sectionHeader: "Intro",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        sectionHeader: "Body",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        sectionHeader: "Conclusion",
        sectionText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
];

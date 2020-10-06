const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
    .then(response => response.text())
    .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here
    // parse string to json data in variable catInfo
    const catInfo = JSON.parse(catString);
    // test that data works
    // console.log(catInfo[0].name);

    // for 1 instance of a mother cat
    if (catInfo.length === 1) {
        motherInfo += catInfo[0].name + '.';
        // for 2 instances of a mother cat
    } else if (catInfo.length === 2) {
        motherInfo += catInfo[0].name + ' and ' + catInfo[1].name + '.';
    } else {
        // for more than 2 mother cats we use a loop
        for (let i = 0; i < catInfo.length; i++) {
            if (i === catInfo.length - 1) {
                motherInfo += ' and ' + catInfo[i].name + '.';
            } else {
                motherInfo += catInfo[i].name + ', ';
            }
        }
    }

    for (let j = 0; j < catInfo.length; j++) {
        total += catInfo[j].kittens.length;
        if (catInfo[j].kittens.gender = 'm') {
            male += 1;
        } else {
        }
    }
    // console.log(total);
    // console.log(male);

    kittenInfo = `There are ${total} total kittens, and ${male} of them are male.`;

    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);

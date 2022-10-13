const photo = document.querySelectorAll("#photos > div");
const title = document.querySelector("#title");
const usernameHtml = document.querySelector("#username");
const dateHtml = document.querySelector("#date");
const postHtml = document.querySelector("#post");
const albumHtml = document.querySelector("#album");
const userHtml = document.querySelector("#user");
const user = {
    id: 11,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
}
const post = {
    userId: 11,
    id: 101,
    title: "Աշխարհը՝ գարնանը, 5 լուսանկարում",
    body: "Աշխարհ, Երկիր մոլորակը և նրա վրա գոյություն ունեցող կյանքը, այդ թվում` մարդկային քաղաքակրթությունը[1]։ Փիլիսոփայական համատեքստում «աշխարհը» ամբողջ ֆիզիկական տիեզերքն է կամ գոյաբանական աշխարհը (անհատի «աշխարհը»)։ Աստվածաբանական համատեքստում աշխարհը նյութական կամ պիղծ ոլորտ է՝ ի տարբերություն երկնային, հոգևոր, տրանսցենդենտալ կամ սրբազան ոլորտների։ «Աշխարհի վերջը» սցենարները վերաբերում են մարդկային պատմության ավարտին՝ հաճախ կրոնական համատեքստում \n Աշխարհի պատմությունը սովորաբար ընկալվում է որպես հինգ հազարամյակների հիմնական աշխարհաքաղաքական զարգացումները՝ առաջին քաղաքակրթություններից մինչև այսօր։ «Համաշխարհային կրոն», «համաշխարհային լեզու», «համաշխարհային կառավարություն» և «համաշխարհային պատերազմ» արտահայտություններում «աշխարհը» նշանակում է միջազգային կամ միջմայրցամաքային շրջան՝ առանց պարտադիր կերպով ընդգրկելու աշխարհի յուրաքանչյուր մասի մասնակցությունը։ \n Աշխարհի բնակչությունը ցանկացած ժամանակ մարդկային բնակչության ամբողջությունն է, նմանապես՝ համաշխարհային տնտեսությունը՝ բոլոր հասարակությունների կամ երկրների տնտեսությունների գումարը, հատկապես համաշխարհայնացման համատեքստում։ «Աշխարհի առաջնություն», «համաշխարհային ապրանք» և «համաշխարհային դրոշներ» արտահայտությունները ենթադրում են բոլոր ինքնիշխան պետությունների գումարը կամ համադրությունը։"
}
const album = {
    userId: 11,
    id: 101,
    title: "Աշխարհ"
}
const photos = [
    {
        albumId: 101,
        id: 5001,
        title: "Աղջիկն իր շան հետ վազում է Գազայի հատվածի հարեւանությամբ գտնվող Նիր Յիցհակ իսրայելական կիբուցում:",
        url: "https://c0.mediamax.am/datas/znews/big_/2020/04/1586939225_4082481.jpg"
    },
    {
        albumId: 101,
        id: 5002,
        title: "Սիրահարները Բեռլինի Տրեպտով թաղամասում:",
        url: "https://c0.mediamax.am/datas/znews/big_/2020/04/1586939225_4487482.jpg"
    },
    {
        albumId: 101,
        id: 5003,
        title: "Շունը նստած է Բոննի բնակարաններից մեկի պատշգամբում:",
        url: "https://c0.mediamax.am/datas/znews/big_/2020/04/1586939225_5097372.jpg"
    },
    {
        albumId: 101,
        id: 5004,
        title: "Զույգը զբոսանքի է դուրս եկել Հարավային Կորեայի մայրաքաղաք Սեուլում:",
        url: "https://c1.mediamax.am/datas/znews/big_/2020/04/1586939225_6186354.jpg"
    },
    {
        albumId: 101,
        id: 5005,
        title: "Տղան ծաղիկներ է քաղել Գազայի հատվածի հարեւանությամբ գտնվող Նիր Յիցհակ իսրայելական կիբուցում:",
        url: "https://c0.mediamax.am/datas/znews/big_/2020/04/1586939225_6384969.jpg"
    },
]

const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(post)
})
    .then(data => data.json())
    .then(data => {
        title.textContent = post.title;
        usernameHtml.textContent = user.username;
        dateHtml.textContent = date;
        postHtml.textContent = post.body;
        albumHtml.textContent = `ԱԼԲՈՄ - ${album.title}`
        photos.forEach((element, index) => {
            console.log(photo[index].children[1]);
            photo[index].children[0].textContent = element.title;
            photo[index].children[1].src = element.url;
        });
        userHtml.textContent = `Հեղինակ՝ ${user.name}`;
    });
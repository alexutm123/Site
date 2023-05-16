
import React from "react";
const champions = [
  {
    id: 1,
    name: "Шахматы Уроки Обучение для начинающих и новичков Шахматные Видео Онлайн",
    date: "Видео Урок 1 онлайн ",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wilhelm_Steinitz2.jpg/220px-Wilhelm_Steinitz2.jpg",
        video: (
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3XOHnISkZl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    ),
  },
 {
    id: 2,
    name: "Шахматная нотация",
    date: "Видео Урок 2 онлайн",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg/220px-Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg",
    video: (
<iframe width="560" height="315" src="https://www.youtube.com/embed/pfXRnNaaRqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    ),
  },
  {
    id: 3,
    name: "ПРЕВРАЩЕНИЕ ПЕШКИ",
    date: "Видео Урок 3 онлайн",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg/220px-Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg",
              video: (
<iframe width="560" height="315" src="https://www.youtube.com/embed/69gTLfuueK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    ),

  },
  {
    id: 4,
    name: "ВЗЯТИЕ НА ПРОХОДЕ",
    date: "Видео Урок 4 онлайн",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/AlexanderAlekhine.jpg",
                video: (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rEeHAUKSMTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    ),
  },
  {
    id: 5,
    name: "РОКИРОВКА ",
    date: "Видео Урок 5 онлайн",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Max_Euwe_%281945%29.jpg/220px-Max_Euwe_%281945%29.jpg",
                video: (
<iframe width="560" height="315" src="https://www.youtube.com/embed/5wQaabwbMfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    ),
  },
  {
    id: 6,
    name: "ЦЕННОСТЬ ФИГУР",
    date: "(Видео Урок 6 онлайн)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Botvinnik_72.jpg/220px-Botvinnik_72.jpg",
               video: (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aMa2U8YeWrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    ),
  },
  {
    id: 7,
    name: "ПАТ ВЕЧНЫЙ ШАХ НИЧЬЯ",
    date: "Видео Урок 7 онлайн",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/SmyslovAndAverbakh2002.jpg/250px-SmyslovAndAverbakh2002.jpg",
                video: (
     <iframe width="560" height="315" src="https://www.youtube.com/embed/XXTTezTkTaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    ),
  },
  {
    id: 8,
    name: "МАТ ФЕРЗЕМ ЛАДЬЕЙ ",
    date: "Видео Урок 8 онлайн",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mikhail_Tal_1982.jpg/230px-Mikhail_Tal_1982.jpg",
                video: (
<iframe width="560" height="315" src="https://www.youtube.com/embed/S3WBKR6YnaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    ),
  },
  {
    id: 9,
    name: "championsList.petrosian",
    date: "(1963-1969)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tigran_Petrosjan_1961_Oberhausen.jpg/220px-Tigran_Petrosjan_1961_Oberhausen.jpg",
                video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 10,
    name: "championsList.spassky",
    date: "(1969-1972)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Boris_Spasski_%281956%29_-_corrected.jpg/220px-Boris_Spasski_%281956%29_-_corrected.jpg",
                video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 11,
    name: "championsList.fischer",
    date: "(1972-1975)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bobby_Fischer_1960_in_Leipzig_in_color.jpg/220px-Bobby_Fischer_1960_in_Leipzig_in_color.jpg",
               video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 12,
    name: "championsList.karpov",
    date: "(1975-1985)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Karpov%2C_Anatoly_%28Flickr%29.jpg/220px-Karpov%2C_Anatoly_%28Flickr%29.jpg",
                video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 13,
    name: "championsList.kasparov",
    date: "(1985-2000)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Garri_kasparow_20070318.jpg/220px-Garri_kasparow_20070318.jpg",
               video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 14,
    name: "championsList.kramnik",
    date: "(2000-2007)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Vladimir_Kramnik_2005.jpg/220px-Vladimir_Kramnik_2005.jpg",
                video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 15,
    name: "championsList.anand",
    date: "(2007-2013)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Viswanathan_Anand_08_14_2005.jpg/220px-Viswanathan_Anand_08_14_2005.jpg",
                video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 16,
    name: "championsList.carlsen",
    date: "(2013-)",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Magnus_Carlsen_Tata_Steel_2013.jpg/220px-Magnus_Carlsen_Tata_Steel_2013.jpg",
                video: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j8S0F-rP9v0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
];

export default champions;

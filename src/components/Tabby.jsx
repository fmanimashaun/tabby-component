import React, { useState } from 'react';
import Styles from '../assets/css/tabby.module.css';
import Digimon from '../assets/img/digimon.png';
import Pokemon from '../assets/img/pokemon.png';
import Tamagotchi from '../assets/img/Tamagotchi.png';
import Arrow from '../assets/img/arrow.svg';

const Tabby = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className={Styles.tabby}>
      <div className={Styles.tabs}>
        <button
          className={tab === 0 ? `${Styles.tab} ${Styles.active}` : Styles.tab}
          onClick={() => setTab(0)}>
          Digimon
        </button>
        <button
          className={tab === 1 ? `${Styles.tab} ${Styles.active}` : Styles.tab}
          onClick={() => setTab(1)}>
          Pokémon
        </button>
        <button
          className={tab === 2 ? `${Styles.tab} ${Styles.active}` : Styles.tab}
          onClick={() => setTab(2)}>
          Tamagotchi
        </button>
      </div>
      <div className={Styles.tab__contents}>
        <div
          className={
            tab === 0
              ? `${Styles.tab__content} ${Styles.active}`
              : Styles.tab__content
          }>
          <h2 className={Styles.heading}>Digimon</h2>
          <img src={Digimon} alt="Digimon" className={Styles.logo} />
          <p className={Styles.body__text}>
            Digimon (デジモン Dejimon, branded as Digimon: Digital Monsters,
            stylized as DIGIMON), short for "Digital Monsters"
            (デジタルモンスター Dejitaru Monsutā), is a Japanese media franchise
            encompassing virtual pet toys, anime, manga, video games, films and
            a trading card game. The franchise focuses on Digimon creatures,
            which are monsters living in a "Digital World", a parallel universe
            that originated from Earth's various communication networks. In many
            incarnations, Digimon are raised by humans called "Digidestined" or
            "Tamers", and they team up to defeat evil Digimon and human villains
            who are trying to destroy the fabric of the Digital world.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Digimon"
            target="_blank"
            rel="noreferrer"
            className={Styles.link}>
            More about Digimon
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>
        <div
          className={
            tab === 1
              ? `${Styles.tab__content} ${Styles.active}`
              : Styles.tab__content
          }>
          <h2 className={Styles.heading}>Pokémon</h2>
          <img src={Pokemon} alt="Pokemon" className={Styles.logo} />
          <p className={Styles.body__text}>
            Pokémon (English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/), also known as Pocket
            Monsters in Japan, is a Japanese media franchise managed by the
            Pokémon Company, a company founded by Nintendo, Game Freak, and
            Creatures. The franchise was created by Satoshi Tajiri in 1995, and
            is centered on fictional creatures called "Pokémon", which humans,
            known as Pokémon Trainers, catch and train to battle each other for
            sport. The English slogan for the franchise is "Gotta Catch 'Em
            All".
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Pok%C3%A9mon"
            target="_blank"
            rel="noreferrer"
            className={Styles.link}>
            More about Pokémon
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>
        <div
          className={
            tab === 2
              ? `${Styles.tab__content} ${Styles.active}`
              : Styles.tab__content
          }>
          <h2 className={Styles.heading}>Tamagotchi</h2>
          <img src={Tamagotchi} alt="Tamagotchi" className={Styles.logo} />
          <p className={Styles.body__text}>
            The Tamagotchi (たまごっち, IPA: [tamaɡotꜜtɕi]) is a handheld
            digital pet that was created in Japan by Akihiro Yokoi of WiZ and
            Aki Maita[1] of Bandai. It was released by Bandai on November 23,
            1996 in Japan and May 1997 in the rest of the world, quickly
            becoming one of the biggest toy fads of the 1990s and early 2000s.
            As of 2010, over 76 million Tamagotchis have been sold worldwide.[2]
            Most Tamagotchi are housed in a small egg-shaped computer with an
            interface usually consisting of three buttons, although the number
            of buttons may vary.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Tamagotchi"
            target="_blank"
            rel="noreferrer"
            className={Styles.link}>
            More about Tamagotchi
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tabby;

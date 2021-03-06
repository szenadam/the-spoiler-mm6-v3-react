import React from 'react';
import './App.scss';
import DungeonBottomMap from "./DungeonBottomMap";
import Map from "./Map";

function App() {

  const dungeons = {
    goblinWatch: {
      monsters: [
        'Goblin, Goblin Shaman, Goblin King',
        'Common Rat, Large Rat, Giant Rat',
        'Bat, Giant Bat, Vampire Bat',
        'Blood Sucker, Brain Sucker, Soul Sucker'
      ],
      efficienfyLevel: 'very easy',
      locations: [
        'Switch to open door',
        'Switches to open wall (NILBOG)',
        'Chest with Goblinwatch Code Scroll for quest 3'
      ]
    }
  }

  return (
    <>
      <header className="header">
        <div className="w-440">
          <img src={require("./assets/imgs/logo.jpg")} alt="Logo" />
        </div>
        <div className="w-390">
          <ul>
            <li><a href="#ma">Marks</a></li>
            <li><a href="#ts">Skills</a></li>
            <li><a href="#gui">Guilds</a></li>
            <li><a href="#tsp">Spells</a></li>
            <li><a href="#tm">Monsters</a></li>
            <li><a href="#tq">Quests</a></li>
            <li><a href="#sq">Subquests</a></li>
            <li><a href="#rep">Reputation</a></li>
            <li><a href="#tr">Seer</a></li>
            <li><a href="#ti">Items</a></li>
            <li><a href="#ta">Artifacts</a></li>
            <li><a href="#te">Enchantments</a></li>
            <li><a href="#tp">Potions</a></li>
          </ul>
        </div>
        <div className="w-440">
          <img height="110" width="440" src={require("./assets/imgs/table.jpg")} alt="Authors" />
        </div>
      </header>

      <Map />

      <section id="ma">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Marks</h3>
            </td>
            <td className="w-660 img-container">
              <img className="marks" src={require("./assets/imgs/marks.jpg")} alt="Map marks" />
            </td>
            <td className="w-440">
              <p>Version 2.0 is the most powerful mm6 walkthrough, included all maps of towns/dungeons, locates of
                treasures/keys/quest items, and repaired many minor bugs. All pictures, descriptions, tablings was
                rebuilt
                for
                better avail and design.<br/>I send my best greets to original walkthrough maker: Mark Marcelais. <i>J.
                  Pike</i><br/>Best
                  view at 1280 * 1024.</p>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ns">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>New Sorpigal</h2>
              <ul>
                <li>Resets every 6 months
                </li>
                <li>Overlord: -
                </li>
                <li>Dungeons: 3
                </li>
                <li>Expert teachers: 14
                </li>
                <li>Master teachers: -</li>
              </ul>
              <br/>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>W to <a href="#ci">Castle Ironfist</a> (5 days)</li>
                  </ul>
                </li>
                <li>By boat to
                  <ul>
                    <li><a href="#mi">Misty Islands</a> (Tuesday, Thursday, Saturday, 3 days, 100gp)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li><a href="#ci">Castle Ironfist</a> (Monday, Wednesday, Friday, 2 days, 25gp)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_humag">Apprentice Mage, Journeymen Mage, Mage</a>
                </li>
                <li><a href="#m_hunoi">Goblin, Goblin Shaman, Goblin King</a><br/>Efficiency level: easy
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img  width="795" height="795" src={require("./assets/imgs/ns.jpg")} alt="New Sorpigal map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Inn
                  <br/><a href="#q_1">quest 1</a>, <a href="#q_2">quest 2</a>, <a href="#q_4">quest 4</a> (Andover
                    Potbello)
                    <br/>Expert Identify (Sheila Loompus, 500gp)
                      <br/>Expert Perception (Tara D'Cathay, 500gp)
                </li>
                <li>Membership to the Buccaneer's Lair (Hejaz Mawsil, 25gp)<br/>Seeking Cobra Eggs (Hejaz Mawsil, 1000gp)
                </li>
                <li>Membership to the Blade's End (Harold Hess, 25gp)</li>
                <li>Expert Bodybuilding (Erik Salzburg, 500gp)</li>
                <li>Expert Meditation (Victor Hosen, 500gp)</li>
                <li>Membership to the Self Guild (Violet Dawson, 100gp)<br/><a href="#q_7">quest 7</a> (Violet Dawson)
                </li>
                <li>Membership to the Elements Guild (Buford T. Allman, 100gp)<br/><a href="#q_5">quest 5</a> (Buford T.
                  Allman)</li>
                <li>Armor Store</li>
                <li>Blade's End (Axe, Spear, Staff, Sword, Leather skills, 375gp)</li>
                <li>Alchemist Store</li>
                <li>Weapon Store</li>
                <li>Coach Travel</li>
                <li>General Store</li>
                <li>Expert Body Magic (Abdulai Mahgreb, 1000gp)</li>
                <li>Expert Mind Magic (Virgil Holiday, 1000gp)</li>
                <li>Expert Spirit Magic (Enoch Highridge, 1000gp)</li>
                <li>Training Hall (Maximum Level: 15)</li>
                <li>Expert Earth Magic (Taro, 1000gp)</li>
                <li>Expert Fire Magic (Isao Magistrus, 1000gp)</li>
                <li>Buccaneer's Lair (Merchant, Identify Item, Perception, Disarm Traps, Dagger, 150gp)
                  <br/>Invisible teleporter to <a href="#ds">Dragonsands</a> (above the lair)
                </li>
                <li>Town Hall
                  <br/><a href="#q_6">quest 6</a>, <a href="#sq_2">subquest 2</a> (Frank Fairchild)
                    <br/><a href="#q_3">quest 3</a>, <a href="#q_8">quest 8</a>, <a href="#sq_1">subquest 1</a> (Janice)
                </li>
                <li>Bank<br/>Expert Air Magic (Cheryl Duncan, 1000gp)</li>
                <li>Town Portal point<br/>Fountain (+5 Hit Points)</li>
                <li>Fountain (+5 Magic Points)</li>
                <li>Fountain (+10 Might temporarily)</li>
                <li>Temple</li>
                <li>
                  Self Guild (Mind Magic, Body Magic, Spirit Magic, 750gp, spellbooks 1-4)<br/>
                  Expert Learning (Donald Retzer, 2000gp)
                </li>
                <li>Elements Guild (Earth Magic, Air Magic, Water Magic, Fire Magic, 750gp, spellbooks 1-4)</li>
                <li>Dragon Tower for <a href="#q_36">quest 36</a></li>
                <li><a href="#ns_gw">Goblinwatch</a></li>
                <li>Expert Staff (Dorf, 2000gp)</li>
                <li><a href="#ns_at">Abandoned Temple</a></li>
                <li>Expert Ancient Weapons (Igor)</li>
                <li>Shrine of Luck (July), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)</li>
                <li>Expert Water Magic (Douglas Hill, 1000gp)</li>
                <li><a href="#ns_gf">Gharik's Forge</a></li>
                <li>Obelisk #15 for <a href="#sq_7">subquest 7</a></li>
                <li>Docks</li>
                <li>Well (+2 Luck permanently)</li>
                <li>Pot (release monsters)</li>
                <li>Walking through the bridge release monsters</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <DungeonBottomMap id='ns_gw' name='Goblinwatch' 
        imgSrc={require("./assets/imgs/ns-gw.jpg")} imgAlt='Goblinwatch map'
        monsters={dungeons.goblinWatch.monsters}
        locations={dungeons.goblinWatch.locations}
        efficienfyLevel={dungeons.goblinWatch.efficienfyLevel}/>

      {/* <section id="ns_at">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>Abandoned Temple</h3><br/><br/><br/><br/><br/>
            </td>
            <td className="w-503">
              <h3>Locations</h3>
              <ol>
                <li>Chest with Candelabra for <a href="#q_4">quest 4</a>
                </li>
                <li>Angela Dawson for <a href="#q_7">quest 7</a>
                </li>
                <li>Heart of Spider Queen for <a href="#q_5">quest 5</a></li>
              </ol>
              <ul>Any important things:
                <li>Cobra Eggs for Hejaz Mawsil in <a href="#ns">New Sorpigal</a></li>
              </ul>
            </td>
            <td className="w-437">
              <ul>
                <li><a href="#m_beas1">Spider, Giant Spider, Huge Spider</a>
                </li>
                <li><a href="#m_beas1">Cobra, King Cobra, Queen Cobra</a>
                </li>
                <li><a href="#m_beas1">Bat, Giant Bat, Vampire Bat</a>
                </li>
                <li>Unique: <a href="#m_beas1">Queen Spider</a>
                  <br/>Efficiency level: very easy
                </li>
              </ul>
              <br/>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="img-container">
              <img height="750" width="1220" src={require("./assets/imgs/ns-at.jpg")} alt="Abandoned Temple map" />
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ns_gf">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Gharik's Forge</h3>
            </td>
            <td className="w-260">
              <img height="330" width="260" src={require("./assets/imgs/ns-gf.jpg")} alt="Gharik's Forge map" />
            </td>
            <td className="w-480">
              <h3>Locations</h3>
              <ol>
                <li>Switch for bridge
                </li>
                <li>Switch (lower) for bridge
                </li>
                <li>Switch (upper) to open secret room
                </li>
                <li>Chest with Letter to Marcus Scroll (useless)
                </li>
                <li>Chest with Gharik's Journal Scroll (useless)
                </li>
                <li>Door (need Gharik's Key from <a href="#mi_sh">Silver Helm Outpost</a> on the <a href="#mi">Misty
                  Islands</a>)
                </li>
                <li>Chest with Hourglass of Time for <a href="#q_13">quest 13</a></li>
              </ol>
              <ul>Any important things:
                <li>Gems from crystals for selling</li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_elem">Fire Beast, Fire Spirit, Fire Elemental</a>
                </li>
                <li><a href="#m_humag">Sorcerer, Magician, Warlock</a>
                  <br/>Efficiency level: very hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ci">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Castle Ironfist</h2>
              <ul>
                <li>Resets every 24 months</li>
                <li>Overlord: Regent Wilbur Humphrey</li>
                <li>Dungeons: 5</li>
                <li>Expert teachers: 13</li>
                <li>Master teachers: 1</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>W to the <a href="#md">Mire of the Damned</a> (5 days)</li>
                    <li>E to <a href="#ns">New Sorpigal</a> (5 days)</li>
                    <li>N to <a href="#bb">Bootleg Bay</a> (5 days)</li>
                  </ul>
                </li>
                <li>By boat to
                  <ul>
                    <li>the <a href="#mi">Misty Islands</a> (Monday, Wednesday, Friday, 2 days, 100gp)</li>
                    <li><a href="#ns">New Sorpigal</a> (Tuesday, Thursday, Saturday, 2 days, 100gp)</li>
                    <li><a href="#bb">Bootleg Bay</a>, East (Tuesday, Friday, 3 days, 100gp)</li>
                    <li>Volcano, <a href="#ns">New Sorpigal</a>, South (Sunday, 2 days)</li>
                    <li>Volcano, <a href="#ds">Dragonsands</a>, near <a href="#ns_gf">Gharik's Forge</a> (Sunday, 14
                      days)
                    </li>
                    <li><a href="#hi">Hermit's Isle</a> (21 days)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li>Arena (Sunday, 1 day, 50gp)</li>
                    <li><a href="#ns">New Sorpigal</a> (Monday, Wednesday, Friday, 2 days, 50gp)</li>
                    <li><a href="#fh">Free Haven</a> (Tuesday, Saturday, 4 days, 50gp)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_hucle">Follower of Baa, Mystic of Baa, Fanatic of Baa</a></li>
                <li><a href="#m_hunoi">Lizard Man, Lizard Archer, Lizard Wizard</a></li>
                <li><a href="#m_beas1">Blood Sucker, Brain Sucker, Soul Sucker</a><br/>Efficiency level: very easy</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/ci.jpg")} alt="Castle Ironfist map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Expert Chain Armor (Rich Hamburg, 1000gp)</li>
                <li>Expert Plate Armor (Benito Tellman, 1000gp)</li>
                <li>Expert Shield (Edgar Carpenter, 2000gp)</li>
                <li>Expert Leather Armor (Newt Headrow, 1000gp)</li>
                <li>Coach Travel</li>
                <li>Membership to the Berserker's Fury (Andrew Besper, 50gp)<br/><a href="#q_9">quest 9</a> (Andrew
                  Besper)
                </li>
                <li>Berserker's Fury (Bow, Shield, Chain Armor, Plate Armor, Repair Item, 500gp)</li>
                <li>Armor Store</li>
                <li>Weapon Store</li>
                <li>Expert Bow (Helen Teal, 2000gp)<br/>Membership to the Mind Guild (Tracy Flauta, 50gp)</li>
                <li>Inn<br/>Expert Dagger (Terrance Smith, 2000gp)</li>
                <li>Docks</li>
                <li>Expert Identify Items (Leon Lazaru, 500gp)</li>
                <li>Expert Disarm Traps (Tyler Tailor, 500gp)</li>
                <li>Training Hall (Maximum Level: 200)<br/>Expert Axe (Stephen Biggs, 2000gp)</li>
                <li>Weapon Store<br/>Expert Sword (Aaron Strongmun, 2000gp)</li>
                <li>Armor Store</li>
                <li>Spirit Guild (Meditation, Spirit Magic, 1000gp, spellbooks 1-7)
                  <br/>Mind Guild (Meditation, Mind Magic, 1000gp, spellbooks 1-7)
                    <br/>Body Guild (Meditation, Body Magic, 1000gp, spellbooks 1-7)
                </li>
                <li>Alchemist Store</li>
                <li>Temple</li>
                <li>Expert Bodybuilding (Olaf Berring, 500gp)</li>
                <li>Master Spirit Magic (Bishop Iquisitorio, High Priest)
                  <br/>Membership to the Spirit Guild (Bishop Iquisitorio, 50gp)
                </li>
                <li>Membership to the Body Guild (Bernice Weaver, 50gp)</li>
                <li>Castle Ironfist
                  <br/><a href="#q_11">quest 11</a>, <a href="#q_12">quest 12</a>, <a href="#q_24">quest 24</a>, <a
                    href="#q_42">quest 42</a>, <a href="#q_43">quest 43</a>, <a href="#sq_3">subquest 3</a> (Wilbur
                    Humphrey)
                    <br/><a href="#q_10">quest 10</a>, <a href="#q_51">quest 51</a> (Nicolai Ironfist)
                      <br/>Expert Learning (Elton Astrogate, 2000gp)
                        <br/>Expert Diplomacy (Walter Hargreaves, 500gp)
                </li>
                <li>Fountain (+10 Speed temporarily)</li>
                <li>Fountain (+10 Accuracy temporarily)</li>
                <li>Teleporter to #35</li>
                <li>Receiver for Teleporter at #37</li>
                <li><a href="#ci_dc">Dragoons' Caverns</a></li>
                <li><a href="#ci_tb">Temple of Baa (Dungeon)</a></li>
                <li><a href="#ci_sg">Shadow Guild Hideout</a></li>
                <li><a href="#tr">Seer</a></li>
                <li>Temple Baa</li>
                <li><a href="#ci_ce">Corlagon's Estate</a></li>
                <li>Receiver for Teleporter at #27</li>
                <li>Fountain (+10 Hit Points)</li>
                <li>Teleporter to #28</li>
                <li>Obelisk #12 <a href="#sq_7">subquest 7</a></li>
                <li>Shrine of Elecricity (September), ask <a href="#tr">Seer</a> in <a href="#ci">Castle
                  Ironfist</a> (#32)
                </li>
                <li>Inn</li>
                <li><a href="#ci_sc">Snergle's Caverns</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ci_dc">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Dragoons' Caverns</h3>
            </td>
            <td className="w-330">
              <img height="380" width="330" src={require("./assets/imgs/ci-dc.jpg")} alt="Dragoons' Caverns map" />
            </td>
            <td className="w-410">
              <h3>Locations</h3>
              <ol>
                <li>Switch (useless)</li>
                <li>Switch (useless)</li>
                <li>Switch to open door</li>
                <li>Picture (+10 luck for one character permanently)</li>
                <li>Chest with Flute (useless)</li>
                <li>Chest with Shadow Guild Scroll for <a href="#sq_2">subquest 2</a></li>
                <li>Switch to secret room</li>
                <li>Switch to open door</li>
                <li>Chest with Harp for <a href="#q_9">quest 9</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hufig">Thug, Ruffian, Brigand</a></li>
                <li><a href="#m_hufig">Fighter, Soldier, Veteran</a></li>
                <li><a href="#m_beas1">Ooze, Acidic Ooze, Corrosive Ooze</a><br/>Efficiency level: medium</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ci_tb">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Temple of Baa</h3>
              <ul>
                <li><a href="#m_hucle">Acolyte of Baa, Cleric of Baa, Priest of Baa</a></li>
                <li><a href="#m_undead">Skeleton, Skeleton Knight, Skeleton Lord</a></li>
                <li><a href="#m_beas1">Common Rat, Large Rat, Giant Rat</a></li>
                <li><a href="#m_beas1">Spider, Giant Spider, Huge Spider</a><br/>Efficiency level: medium</li>
              </ul>
            </td>
            <td className="w-720">
              <img height="950" width="720" src={require("./assets/imgs/ci-tb.jpg")} alt="Temple of Baa map" />
            </td>
            <td className="w-320">
              <h3>Locations</h3>
              <ol>
                <li>Doors (Touch N,E,W,S to open chest with Bathhouse 1 Key)</li>
                <li>Statue with Store Room 1 Key</li>
                <li>Bathhouse 1 (with Treasere Room Key)</li>
                <li>Store Room 1 (with Bathhouse 2 Key)</li>
                <li>Bathhouse 2 (with Store Room 2 Key)</li>
                <li>Store Room 2 (with Secret Door Key)</li>
                <li>Secret Door (need Secret Door Key)</li>
                <li>Temple Gong (release monsters) for Lawrence Aleman in <a href="#fh">Free Haven</a></li>
                <li>Treasure Room 1 (with Treasure Room 2 Key) and chest with Chime of Harmony for <a href="#q_8">quest
                  8</a></li>
                <li>Treasure Room 2 (with money)</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ci_sg">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Shadow Guild Hideout</h3>
            </td>
            <td className="w-185">
              <img height="220" width="185" src={require("./assets/imgs/ci-sg.jpg")} alt="Shadow Guild Hideout map" />
            </td>
            <td className="w-555">
              <h3>Locations</h3>
              <ol>
                <li>Switch to open wall</li>
                <li>Chest with Prince of Thieves Scroll (useless)</li>
                <li>Switch to open wall</li>
                <li>Switch to open wall</li>
                <li>Switch to open wall</li>
                <li>Chest with Guild Key</li>
                <li>Sharry Carnegie for <a href="#q_6">quest 6</a> (need Guild Key)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_huthi">Thief, Burglar, Rogue</a></li>
                <li><a href="#m_hufig">Thug, Ruffian, Brigand</a><br/>Efficiency level: easy</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ci_ce">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Corlagon's Estate</h3>
            </td>
            <td className="w-350">
              <img height="470" width="350" src={require("./assets/imgs/ci-ce.jpg")} alt="Corlagon's Estate map" />
            </td>
            <td className="w-390">
              <h3>Locations</h3>
              <ol>
                <li>Chest with Corlagon's Diary Scroll (useless)</li>
                <li>Switch to open wall</li>
                <li>Switch to open wall</li>
                <li>Switch to open wall</li>
                <li>Switch to open wall</li>
                <li>Chest with Crystal of Terrax for <a href="#q_23">quest 23</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_undead">Ghost, Evil Spirit, Spectre</a></li>
                <li><a href="#m_undead">Skeleton, Skeleton Knight, Skeleton Lord</a></li>
                <li><a href="#m_undead">Power Lich</a><br/>Efficiency level: medium</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ci_sc">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Snergle's Caverns</h3>
            </td>
            <td className="w-310">
              <img height="440" width="310" src={require("./assets/imgs/ci-sc.jpg")} alt="Snergle's Caverns map" />
            </td>
            <td className="w-430">
              <h3>Locations</h3>
              <ol>
                <li>Bones (+5 Magic Resistance for one character)</li>
                <li>Bones (+5 Poison Resistance for one character)</li>
                <li>Switch to open secret room</li>
                <li>Door (need Snergle's Chambers Key from <a href="#md_sm">Snergle's Iron Mines</a> on the <a
                  href="#md">Mire
                  of Damned</a>), release monster
                </li>
                <li>Snergle with Snergle's Axe for <a href="#q_26">quest 26</a> and switch to open wall</li>
                <li>Chest with Letter to Snergle (useless)</li>
                <li>Bones (+5 Might for one character)</li>
              </ol>
              <ul>Any important things:
                <li>Crystals (for selling)</li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hunoi">Dwarf, Dwarf Warrior, Dwarf Lord</a></li>
                <li><a href="#m_beas1">Bat, Giant Bat, Vampire Bat</a></li>
                <li>Unique: <a href="#mu_Snergle">Snergle</a><br/>Efficiency level: medium</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="mi">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Misty Islands</h2>
              <ul>
                <li>Resets every 24 months</li>
                <li>Overlord: Marquis Albert Newton</li>
                <li>Dungeons: 1</li>
                <li>Expert teachers: 4</li>
                <li>Master teachers: 4</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By boat to
                  <ul>
                    <li><a href="#ci">Castle Ironfist</a> (Monday, Wednesday, Friday, 2 days, 250gp)</li>
                    <li><a href="#sc">Silver Cove</a> (Monday, Thursday, 3 days, 250gp)</li>
                    <li><a href="#bb">Bootleg Bay</a>, East (Tuesday, Thursday, Saturday, 2 days, 250gp)</li>
                  </ul>
                </li>
              </ul>
              <br/>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_hucle">Follower of Baa, Mystic of Baa, Fanatic of Baa</a></li>
                <li><a href="#m_huthi">Cutpurse, Bounty Hunter, Assassin</a><br/>Efficiency level: very easy</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/mi.jpg")} alt="Misty Island map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Activating Teleporter #29 (Kathleen Mester)</li>
                <li>Fire Guild (Learning, Fire Magic, 1000gp, spellbooks 1-7)</li>
                <li>Water Guild (Learning, Water Magic, 1000gp, spellbooks 1-7)</li>
                <li>Air Guild (Learning, Air Magic, 1000gp, spellbooks 1-7)</li>
                <li>Master Meditation (Norio Ariganaka, rank 7, Personality 30, 2500gp)</li>
                <li>Master Water Magic (Harper Collins, rank 12, 4000gp)
                  <br/>Membership to the Water Guild (Harper Collins, 50gp)
                </li>
                <li>Master Air Magic (Caao Salem, Archmage, 4000gp)
                  <br/>Membership to the Air Guild (Caao Salem, 50gp)
                </li>
                <li>Master Fire Magic (Jezebel, rank 12, 4000gp)
                  <br/>Membership to the Fire Guild (Jezebel, 50gp)
                </li>
                <li>Bank</li>
                <li>General Store</li>
                <li>Alchemist Store</li>
                <li>Town Hall
                  <br/><a href="#q_15">quest 15</a> (Charles D'Sorpigal)
                    <br/><a href="#sq_1">subquest 1</a> (Earnest)
                </li>
                <li>Temple</li>
                <li>Training Hall (Maximum Level: 30)</li>
                <li>Weapon Store</li>
                <li>Armor Store</li>
                <li>Town Portal point<br/>Fountain (+10 Spell points)</li>
                <li>Inn</li>
                <li>Fountain (+20 luck temporarily)</li>
                <li>Expert Staff (Calvin Black, 2000gp)</li>
                <li>Expert Spear (Gonzalo Ramirez, 2000gp)
                  <br/>Membership to the Duelist's Edge (Gonzalo Ramirez, 50gp)
                </li>
                <li>Expert Repair Items (Bernard Jacobs, 500gp)</li>
                <li>Expert Leather Armor (Arthur O'Leery, 1000gp)
                  <br/>Membership to the Buccaneer's Lair (Arthur O'Leery, 25gp)
                    <br/>Buccaneer's Lair (Diplomacy, Leather Armor, Identify Item, Perception, Disarm Trap, 200gp)
                </li>
                <li>Duelist's Edge (Bodybuilding, Mace, Chain Armor, Bow, Shield, 500gp)</li>
                <li>Docks</li>
                <li>Fountain (+10 Intelligence and Personality temporarily)</li>
                <li>Fountain (+5 Elemental resistances temporarily)</li>
                <li><a href="#q_13">quest 13</a>, <a href="#q_14">quest 14</a>, <a href="#q_23">quest 23</a> (Lord
                  Albert
                  Newton)
                </li>
                <li>Teleporter to #34</li>
                <li>Shrine of Intellect (February), ask <a href="#tr">Seer</a> in <a href="#ci">Castle
                  Ironfist</a> (#32)
                </li>
                <li>Receiver for Teleporter #35</li>
                <li>Dragon Tower for <a href="#q_36">quest 36</a></li>
                <li><a href="#mi_sh">Silver Helm Outpost</a></li>
                <li>Receiver for Teleporter #29</li>
                <li>Teleporter to #31</li>
                <li>Obelisk #14 <a href="#sq_7">subquest 7</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="mi_sh">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Silver Helm Outpost</h3>
            </td>
            <td className="w-200">
              <img height="240" width="200" src={require("./assets/imgs/mi-sh.jpg")} alt="Silver Helm Outpost map" />
            </td>
            <td className="w-540">
              <h3>Locations</h3>
              <ol>
                <li>Switch for stairs</li>
                <li>Melody Silver for <a href="#q_11">quest 11</a></li>
                <li>Chest with Enemies List Scroll for <a href="#q_15">quest 15</a></li>
                <li>Switch to ope secret room</li>
                <li>Chest with Gharik's Key for <a href="#q_13">quest 13</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hufig">Guard, Lieutenant, Captain</a></li>
                <li><a href="#m_hufig">Swordsman, Expert Swordsman, Master Swordsman</a></li>
                <li><a href="#m_hucle">Novice Monk, Initiate Monk, Master Monk</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="bb">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Bootleg Bay</h2>
              <ul>
                <li>Resets every 8 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 4</li>
                <li>Expert teachers: 2</li>
                <li>Master teachers: -</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>S to <a href="#ci">Castle Ironfist</a> (5 days)</li>
                    <li>W to <a href="#fh">Free Haven</a> (5 days)</li>
                  </ul>
                </li>
                <li>By boat to
                  <ul>
                    <li>Bootleg Bay West (Monday, Wednesday, 1 day, 150gp from east dock)</li>
                    <li><a href="#ci">Castle Ironfist</a> (Tuesday, Thursday, 4 days, 150gp from west dock)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_hufig">Cannibal, Head Hunter, Witch Doctor</a></li>
                <li><a href="#m_hunoi">Lizard Man, Lizard Archer, Lizard Wizard</a>
                  <br/>Efficiency level: very easy
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img  width="795" height="795" src={require("./assets/imgs/bb.jpg")} alt="Bootleg Bay map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Obelisk #11 <a href="#sq_7">subquest 7</a></li>
                <li><a href="#bb_hf">Hall of the Fire Lord</a></li>
                <li>Circus (December-March). Nicolai is here, if running <a href="#q_10">quest 10</a>.</li>
                <li>Fountain (+20 Spell points) and solution for <a href="#q_14">quest 14</a></li>
                <li>Expert Perception (Shoshi Pertoniki, 500gp)</li>
                <li>Expert Chain Armor (Preston Harper, 1000gp)</li>
                <li>Weapon Store</li>
                <li>Inn</li>
                <li>Temple<br/><a href="#q_16">quest 16</a> (Winston Schezar)</li>
                <li>Training Hall (Maximum Level: 20)</li>
                <li>Alchemist Store</li>
                <li>Armor Store</li>
                <li>Fountain (+20 might temporarily)</li>
                <li><a href="#bb_tf">Temple of the Fist</a></li>
                <li>Fountain (+2 personality permanently)</li>
                <li>Fountain (+2 intellect permanently)</li>
                <li><a href="#bb_tt">Temple of Tsantsa</a></li>
                <li>Inn</li>
                <li>East Docks</li>
                <li><a href="#bb_ts">Temple of the Sun</a></li>
                <li>Temple Baa</li>
                <li>West Docks</li>
                <li>Shrine of Might (January), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)
                </li>
                <li>Pedestal for <a href="#q_39">quest 39</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="bb_tt">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Temple of Tsantsa</h3>
            </td>
            <td className="w-250">
              <img height="250" width="250" src={require("./assets/imgs/bb-tt.jpg")} alt="Temple of Tsantsa map" />
            </td>
            <td className="w-490">
              <h3>Locations</h3>
              <ol>
                <li>Trap 1 (with switch)</li>
                <li>Switch to trap 1</li>
                <li>Switch to open #6 and #9</li>
                <li>Trap 2 (with switch)</li>
                <li>Switch to trap 2</li>
                <li>Switch to open door</li>
                <li>Trap 3 (with switch)</li>
                <li>Switch to trap 3</li>
                <li>Switch to open door</li>
                <li>Chest with Cell Key</li>
                <li>Sherell Ivaneh for <a href="#q_20">quest 20</a> (need Cell Key)</li>
              </ol>
              <ul>Any important things:
                <li>Bones for Lon Miller in <a href="#fh">Free Haven</a></li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hufig">Cannibal, Head Hunter, Witch Doctor</a></li>
                <li><a href="#m_beas1">Cobra, King Cobra, Queen Cobra</a>
                  <br/>Efficiency level: very easy
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        <br/>
      </section>

      <section id="bb_ts">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Temple of the Sun</h3>
            </td>
            <td className="w-180">
              <img height="100" width="180" src={require("./assets/imgs/bb-ts.jpg")} alt="Temple of the Sun map" />
            </td>
            <td className="w-560">
              <h3>Locations</h3>
              <ol>
                <li>Chest with Sacred Chalice for <a href="#q_33">quest 33</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hucle">Novice Monk, Initiate Monk, Master Monk</a>
                </li>
                <li><a href="#m_hunoi">Minotaur King</a>
                  <br/>Efficiency level: easy
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="bb_tf">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Temple of the Fist</h3>
            </td>
            <td className="w-110">
              <img height="140" width="110" src={require("./assets/imgs/bb-tf.jpg")} alt="Temple of the Fist map" />
            </td>
            <td className="w-630">
              <h3>Locations</h3>
              <ol>
                <li>Switch to open wall</li>
                <li>Switch to open door</li>
                <li>Temple Baa Letter (useless)</li>
                <li>Evil Crystal for <a href="#q_16">quest 16</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_beas1">Common Rat, Large Rat, Giant Rat</a>
                </li>
                <li><a href="#m_hucle">Novice Monk, Initiate Monk, Master Monk</a>
                  <br/>Efficiency level: very easy
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="bb_hf">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Hall of the Fire Lord</h3>
            </td>
            <td className="w-310">
              <img height="350" width="310" src={require("./assets/imgs/bb-fl.jpg")} alt="Hall of the Fire Lord" />
            </td>
            <td className="w-430">
              <h3>Locations</h3>
              <ol>
                <li><a href="#q_48">quest 48</a> (Fire Lord)</li>
                <li>Journal Fragment Scroll (useless)</li>
                <li>Door (need 1 amber to open)</li>
                <li>Door (need 1 amber to open)</li>
                <li>Fallen Defender (with Chest Key)</li>
                <li>Crystal Skull (for absorbing radioactivity in <a href="#ds_tv">Tomb of VARN</a> at <a
                  href="#ds">Dragonsands</a>)
                </li>
              </ol>
              <ul>Any Important things:
                <li>Let you go to South first for +2 ambers (2 ambers are at starting), must have 1 amber at every
                  character
                  to use teleporters for free.
                </li>
                <li>Amber for Dillian Robinson in <a href="#fh">Free Haven</a></li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hunoi">Goblin, Goblin Shaman, Goblin King</a>
                </li>
                <li><a href="#m_hunoi">Ogre, Ogre Raider, Ogre Chieftan</a>
                </li>
                <li>Unique: <a href="#m_hunoi">Fallen Defender</a>
                  <br/>Efficiency level: easy
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fh">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Free Haven</h2>
              <ul>
                <li>Resets every 24 months</li>
                <li>Overlord: Lord Osric Temper</li>
                <li>Dungeons: 6</li>
                <li>Expert teachers: 14</li>
                <li>Master teachers: 3</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>N to <a href="#fz">Frozen Highlands</a> (5 days)</li>
                    <li>W to <a href="#bs">Blackshire</a> (5 days)</li>
                    <li>S to <a href="#md">Mire of the Damned</a> (5 days)</li>
                    <li>E to <a href="#bb">Bootleg Bay</a> (5 days)</li>
                  </ul>
                </li>
                <li>By boat to
                  <ul>
                    <li><a href="#mi">Misty Islands</a> (Monday, Thursday, 4 days, 300gp)</li>
                    <li><a href="#sc">Silver Cove</a> (Tuesday, Thursday, 3 days, 300gp)</li>
                    <li><a href="#ci">Castle Ironfist</a> (Wednesday, 5 days, 300gp)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li><a href="#sc">Silver Cove</a> (Monday, Thursday, 4 days, 100gp from north)</li>
                    <li><a href="#ci">Castle Ironfist</a> (Tuesday, Friday, 4 days, 100gp from north)</li>
                    <li><a href="#md">Darkmoor</a> (Wednesday, Saturday, 5 days, 100gp from north)</li>
                    <li><a href="#bs">Blackshire</a> (Monday, Thursday, 3 days, 150gp from south)</li>
                    <li><a href="#ks">Kriegspire</a> (Tuesday, Friday, 3 days, 150gp from south)</li>
                    <li><a href="#fz">White Cap</a> (Wednesday, Saturday, 3 days, 150gp from south)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_hufig">Archer, Master Archer, Fire Archer</a></li>
                <li><a href="#m_humag">Apprentice Mage, Journeyman Mage, Mage</a>
                  <br/>Efficiency level: easy
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img  width="795" height="795" src={require("./assets/imgs/fh.jpg")} alt="Free Haven map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Inn</li>
                <li>Weapon Store</li>
                <li>Armor Store</li>
                <li>Coach Travel (South Station)</li>
                <li>Membership to the Body Guild (Peggy Woods, 50gp)</li>
                <li>Membership to the Spirit Guild (Wilma Rothwing, 50gp)</li>
                <li>Expert Body Magic (Tim O'Hoolihan, 1000gp)
                  <br/>Expert Spirit Magic (Michele Blackshire, 1000gp)
                </li>
                <li>Water Guild (Learning, Water Magic, 1500gp, all spellbooks)</li>
                <li>Expert Mind Magic (Mynasia, 1000gp)</li>
                <li>Membership to the Mind Guild (Elsie Freedman, 50gp)</li>
                <li>Fire Guild (Learning, Fire Magic, 1500gp, all spellbooks)</li>
                <li>Air Guild (Learning, Air Magic, 1500gp, all spellbooks)</li>
                <li>Seeking Four Leaf Clovers (Geoff Southy, 25gp)</li>
                <li>Seeking Amber (Dillian Robinson, 500gp)</li>
                <li>Body Guild (Meditation, Body Magic, 1500gp, all spellbooks)</li>
                <li><a href="#fh_se">Frre Haven Sewers</a></li>
                <li>Earth Guild (Learning, Earth Magic, 1500gp, all spellbooks)</li>
                <li>Alchemist Store</li>
                <li>Expert Dagger (Logan Dasher, 2000gp)</li>
                <li>Expert Sword (Michael Ogilvy, 2000gp)</li>
                <li>Seeking Temple Gongs (Lawrence Aleman, 2000gp)</li>
                <li>Expert Merchant (Livia Farrel, 2000gp)</li>
                <li>Training Hall (Maximum Level: 60)</li>
                <li>Expert Diplomacy (Sylvester Moor, 500gp)</li>
                <li><a href="#q_19">quest 19</a> (Zoltan Phelps)</li>
                <li>Membership to the Fire Guild (Corey Rozburg, 50gp)</li>
                <li>Membership to the Air Guild (Jessica Carson, 50gp)</li>
                <li>Membership to the Water Guild (Dominique Juarez, 50gp)
                  <br/><a href="#fh_se">Frre Haven Sewers</a>
                </li>
                <li>Membership to the Earth Guild (Ike Pargrew, 50gp)</li>
                <li>Seeking Harpy Feathers (Bonnie Rotterdam, 10gp)</li>
                <li><a href="#fh_se">Frre Haven Sewers</a></li>
                <li>Master Identify Items (Hans Gifford, rank 7, Intelligence 30, 2500gp)</li>
                <li>Inn</li>
                <li>Seeking Teeth (Sy Roth, 500gp)
                  <br/><a href="#fh_se">Frre Haven Sewers</a>
                </li>
                <li>Docks</li>
                <li>Seeking Kegs of Wine (Nick Fenster, 300gp)</li>
                <li>Bank</li>
                <li>Membership to the Duelist's Edge (Winston Historian, 50gp)</li>
                <li><a href="#q_20">quest 20</a> (Carlo Tormini)</li>
                <li>General store</li>
                <li>Expert Disarm Traps (Ivan Magyar, 500gp)
                  <br/>Membership to the Smuggler's Guild (Sergio Carrington, 50gp)
                    <br/><a href="#fh_se">Frre Haven Sewers</a>
                </li>
                <li>Fountain (+2 Might permanently)</li>
                <li>Duelist's Edge (Bow, Chain Armor, Shield, Bodybuilding, Mace, 625gp)</li>
                <li>Weapon Store</li>
                <li>Armor Store</li>
                <li>Town Portal point
                  <br/>Fountain (+25 hit points)
                </li>
                <li>Expert Shield (Takao, 2000gp)
                  <br/><a href="#fh_se">Frre Haven Sewers</a>
                </li>
                <li>Mind Guild (Meditation, Mind Magic, 1500gp, all spellbooks)</li>
                <li>Expert Plate Armor (Woodrow Albright, 1000gp)</li>
                <li>Coach Travel (North Station)</li>
                <li>Alchemist Store</li>
                <li>Dragon Tower for <a href="#q_36">quest 36</a></li>
                <li>Spirit Guild (Meditation, Spirit Magic, 1500gp, all spellbooks)</li>
                <li>Expert Earth Magic (Li Tizare, 1000gp)
                  <br/>Expert Air Magic (Zodahn Delphi, 1000gp)
                </li>
                <li>Expert Fire Magic (Jack Van Imp, 1000gp)</li>
                <li>Expert Water Magic (Hitomi Mirumoto, 1000gp)</li>
                <li><a href="#q_21">quest 21</a> (Gabriel Cartman)</li>
                <li>Temple</li>
                <li>Shrine of Accuracy (May), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)</li>
                <li>High Council
                  <br/>Slicker Silvertongue (<a href="#q_43">quest 43</a>)
                    <br/><a href="#fh_or">Oracle</a> (only when quests <a href="#q_12">12</a>, <a href="#q_13">13</a>,<a
                      href="#q_17">17</a>, <a href="#q_28">28</a>, <a href="#q_29">29</a>, <a href="#q_34">34</a>, <a
                      href="#q_43">43</a> are complete)
                      <br/><a href="#fh_cc">Control Center</a> (only when <a href="#q_49">quest 49</a> is complete)
                </li>
                <li>Master Bodybuilding (Jason Traveller, rank 7, Endurance 30, 2500gp</li>
                <li>Seeking Lodestones (Davis Carp, 5gp)</li>
                <li>Seeking Bones (Lon Miller, 1000gp)</li>
                <li>Fountain (release monsters)</li>
                <li>Seeking Golden Pyramids (Renee Blackburn, 1000gp)</li>
                <li>Inn
                  <br/>Chadwick Blackpool (<a href="#q_18">quest 18</a>)
                </li>
                <li><a href="#fh_tm">Temple of the Moon</a></li>
                <li><a href="#fh_te">Tomb of Ethric the Mad</a></li>
                <li>Obelisk #8 <a href="#sq_7">subquest 7</a></li>
                <li>Temple Baa</li>
                <li><a href="#fh_dk">Dragoons' Keep</a></li>
                <li><a href="#q_17">quest 17</a>, <a href="#q_18">quest 18</a>, <a href="#q_22">quest 22</a> (Osric
                  Temper)
                  <br/>Master Plate Armor (Forest Suthers, Heroes)
                </li>
                <li> Stone Cutter (George Almond) for <a href="#q_27">quest 27</a>
                </li>
                <li> Carpenter (Ral) for <a href="#q_27">quest 27</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fh_tm">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Temple of the Moon</h3>
            </td>
            <td className="w-390">
              <img height="250" width="390" src={require("./assets/imgs/fh-tm.jpg")} alt="Temple of the Moon map" />
            </td>
            <td className="w-350">
              <h3>Locations</h3>
              <ol>
                <li>Plaque (with important informations)
                  <br/>Door (need touching the 6 altars)
                </li>
                <li>Altar of Life for open door (+5 Personality permanently for all characters)</li>
                <li>Altar of Accuracy for open door (+5 Accuracy permanently for all characters)</li>
                <li>Altar of Might for open door (+5 Might permanently for all characters)</li>
                <li>Altar of Endurance for open door (+5 Endurance permanently for all characters)</li>
                <li>Altar of Speed for open door with switch for open secret room (+5 Speed permanently for all
                  characters)
                </li>
                <li>Altar of Luck for open door (+5 Luck permanently for all characters)</li>
                <li>Altar of the Moon (touch Crystals at midnight for <a href="#q_32">quest 32</a>)</li>
                <li>Chest with Remnants Scroll (useless)</li>
              </ol>
              <ul>Any important things:
                <li>Cobra Eggs for Hejaz Mawsil in <a href="#ns">New Sorpigal</a></li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_beas1">Cobra, King Cobra, Queen Cobra</a></li>
                <li><a href="#m_hucle">Druid, Great Gruid, Grand Druid</a></li>
                <li><a href="#m_beas2">Medusa, Medusa Enchantress, Gorgon</a>
                  <br/>Efficiency level: easy
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fh_te">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Tomb of Ethric the Mad</h3>
            </td>
            <td className="w-300">
              <img height="300" width="300" src={require("./assets/imgs/fh-em.jpg")} alt="Tomb of Ethric the Mad map" />
            </td>
            <td className="w-440">
              <h3>Locations</h3>
              <ol>
                <li>Switch to open door</li>
                <li>Switch to open door</li>
                <li>Switch to open door</li>
                <li>Ethric's skull for <a href="#q_21">quest 21</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_undead">Skeleton, Skeleton Knight, Skeleton Lord</a></li>
                <li><a href="#m_undead">Ghost, Evil Spirit, Spectre</a></li>
                <li><a href="#m_undead">Lich, Greater Lich, Power Lich</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fh_dk">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Dragoons' Keep</h3>
            </td>
            <td className="w-290">
              <img height="400" width="290" src={require("./assets/imgs/fh-dk.jpg")} alt="Dragoons' Keep map" />
            </td>
            <td className="w-450">
              <h3>Locations</h3>
              <ol>
                <li>Switch to open door</li>
                <li>Switch to open door</li>
                <li>Switch to open door</li>
                <li>Switch to open door</li>
                <li>Switch to open door</li>
                <li>Switch to open door (wait in the room for guards)</li>
                <li>Chest with Mordred for <a href="#q_19">quest 19</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hufig">Fighter, Soldier, Veteran</a></li>
                <li><a href="#m_beas1">Common Rat, Large Rat, Giant Rat</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fh_se">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>Free Haven Sewers</h3>
            </td>
            <td className="w-503">
              <h3>Locations</h3>
              <ol>
                <li>Grate with Sewer Key (but not sure...)</li>
                <li>Well (+10 Hit points)</li>
                <li>Prince of Thieves is here if <a href="#q_28">quest 28</a> is running (before you enter the Sewers,
                  be
                  sure
                  you have completed the <a href="#ci_dc">Dragoons' Caverns</a> in the <a href="#ci">Castle Ironfist</a>,
                  and
                  then <a href="#ci_sg">Shadow Guild Hideout</a> in the <a href="#ci">Castle Ironfist</a>, and then <a
                    href="#fz_sg">Shadow Guild</a> in the <a href="#fz">Frozen Highlands</a>, because he has fled from
                  them)
                </li>
                <li>Door (need Sewer Key)</li>
                <li>Stocked monsters between walls (stay to close to the wall and cast Ring of Fire, it will kill theese
                  monsters).
                </li>
                <li>Teleporter to <a href="#hi_st">Supreme Temple of Baa</a> at <a href="#hi">Hermit's Isle</a> (the
                  secret
                  door can be opened from the temple)
                </li>
              </ol>
            </td>
            <td className="w-437">
              <ul>
                <li><a href="#m_beas1">Common Rat, Large Rat, Giant Rat</a></li>
                <li><a href="#m_hucle">Acolyte of Baa, Cleric of Baa, Priest of Baa</a></li>
                <li><a href="#m_huthi">Thief, Burglar, Rogue</a>
                  <br/>Efficiency level: easy
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="img-container">
              <img height="570" width="1000" src={require("./assets/imgs/fh-sw.jpg")} alt="Free Haven Sewers map" />
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fh_or">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Oracle of Enroth
              </h3></td>
            <td className="w-370">
              <img height="370" width="370" src={require("./assets/imgs/fh-or.jpg")} alt="Oracle of Enroth map" />
            </td>
            <td className="w-370">
              <h3>Locations</h3>
              <ol>
                <li>Power Panel (system on/off)
                </li>
                <li>Panel (open the door to Oracle)
                </li>
                <li><a href="#q_44">quest 44</a>, <a href="#q_45">quest 45</a>, <a href="#q_46">quest 46</a>, <a
                  href="#q_47">quest
                  47</a>, <a href="#q_49">quest 49</a>, <a href="#q_50">quest 50</a> (Oracle)
                </li>
                <li>4 place for 4 memory crystals (the order is not important)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li>No monsters are in this location</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fh_cc">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>Control Center</h3>
              <ul>
                <li><a href="#m_robot">Patrol Unit, Enforcer Unit, Terminator Unit</a>
                  <br/>Efficiency level: extremely hard
                </li>
              </ul>
            </td>
            <td className="w-580">
              <img height="350" width="580" src={require("./assets/imgs/fh-cc.jpg")} alt="Control Center map" />
            </td>
            <td className="w-360">
              <h3>Locations</h3>
              <ol>
                <li>Computer terminal (Blaster)
                </li>
                <li>Chest with Proclamation Scroll for <a href="#sq_9">subquest 9</a></li>
              </ol>
              <ul>Any important things:
                <li>8 Blasters, and 4 Blaster Rifles and Blaster weapon skill</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="md">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Mire of the Damned</h2>
              <ul>
                <li>Resets every 6 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 3</li>
                <li>Expert teachers: 3</li>
                <li>Master teachers: 4</li>
              </ul>
              <br/>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>N to <a href="#fh">Free Haven</a> (5 days)</li>
                    <li>E to <a href="#ci">Castle Ironfist</a> (5 days)</li>
                    <li>W to <a href="#ns">Dragonsands</a> (5 days)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li><a href="#fh">Free Haven</a> (Monday, Friday, 5 days, 250gp)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_undead">Skeleton, Skeleton Knight, Skeleton Lord</a></li>
                <li><a href="#m_undead">Ghost, Evil Spirit, Spectre</a></li>
                <li><a href="#m_beas2">Harpy, Harpy Hag, Harpy Witch</a>
                  <br/>Efficiency level: easy
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/md.jpg")} alt="Mire of the Damned map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Circus (August-November). Nicolai is here, if running <a href="#q_10">quest 10</a>.</li>
                <li>Inn</li>
                <li><a href="#md_sm">Snergle's Iron Mines</a></li>
                <li>Fountain (+2 Endurance permanently)</li>
                <li>Temple Baa</li>
                <li>Obelisk #9 <a href="#sq_7">subquest 7</a></li>
                <li>Shrine of Speed (June), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)</li>
                <li>Coach Travel</li>
                <li>Weapon Store</li>
                <li>Master Chain Armor (David Feather, rank 10, Crusaders)</li>
                <li><a href="#q_25">quest 25</a> (Terry Ros, he has 2 house. BUG!)</li>
                <li>Master Perception (Macro Caligula, rank 7, Luck 30, 2500gp)</li>
                <li>Expert Mace (Jack Crow, 2000gp)
                  <br/>Expert Merchant (Casey Ludwig, 2000gp)
                    <br/>Alchemist Store
                </li>
                <li>Armor Store</li>
                <li>Master Spear (Burton Rutherford, rank 8, Cavaliers, 5000gp)</li>
                <li>Inn
                  <br/>Master Axe if <a href="#q_26">quest 26</a> completed (Avinril Smythers)
                </li>
                <li>Expert Axe (Connie Lettering, 2000gp)</li>
                <li>Invisible Bridge</li>
                <li><a href="#md_cd">Castle Darkmoor</a></li>
                <li><a href="#md_dl">Dragon's Lair</a></li>
                <li>Pedestal for <a href="#q_39">quest 39</a></li>
                <li>Walking through this place release monsters</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="md_sm">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Snergle's Iron Mines</h3>
            </td>
            <td className="w-480">
              <img height="300" width="480" src={require("./assets/imgs/md-sm.jpg")} alt="Snergle's Iron Mines map" />
            </td>
            <td className="w-260">
              <h3>Locations</h3>
              <ol>
                <li>Pool (+10 spell points)</li>
                <li>Pool (+10 hit points)</li>
                <li>Library (can search the bookshelves)</li>
                <li>Chest with Cell Key</li>
                <li>Chest (openable at left and right side)</li>
                <li>Cell with Snergle's Chambers Key for <a href="#q_26">quest 26</a> (need Cell Key)</li>
                <li>Chest with Orders from Snergle Scroll (useless)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hunoi">Dwarf, Dwarf Warrior, Dwarf Lord</a></li>
                <li><a href="#m_beas1">Ooze, Acidic Ooze, Corrosive Ooze</a></li>
                <li><a href="#m_beas3">Devil Spawn, Devil Worker, Devil Warrior</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="md_dl">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Dragon's Lair</h3>
            </td>
            <td className="w-90">
              <img height="130" width="90" src={require("./assets/imgs/md-dl.jpg")} alt="Dragon's Lair map" />
            </td>
            <td className="w-650">
              <h3>Locations</h3>
              <ol>
                <li>Longfang Witherhide with Dragon Claw for <a href="#q_24">quest 24</a></li>
              </ol>
              <ul>Any important things:
                <li>Bones for Lon Miller in <a href="#fh">Free Haven</a></li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li>Unique: <a href="#m_beas3">Longfang Witherhide</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="md_cd">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>Castle Darkmoor</h3>
            </td>
            <td className="w-503">
              <h3>Locations</h3>
              <ol>
                <li>Switch to activate Main Switch 1</li>
                <li>Main Switch 1</li>
                <li>Switch to activate Main Switch 2</li>
                <li>Main Switch 2</li>
                <li>Lich King</li>
                <li>Memory Crystal Delta for <a href="#q_46">quest 46</a></li>
                <li>Switch to activate Main Switch 3</li>
                <li>Main Switch 3</li>
                <li>Podium with Book of Liches for <a href="#q_25">quest 25</a></li>
                <li>3 Scarcophaguses (stealing is 3* -200 karma!)</li>
              </ol>
              <ul>Any important things:
                <li>Gems from crystals for selling</li>
              </ul>
            </td>
            <td className="w-437">
              <ul>
                <li><a href="#m_hunoi">Ogre, Ogre Raider, Ogre Chieftan</a></li>
                <li><a href="#m_undead">Lich, Greater Lich, Power Lich</a></li>
                <li><a href="#m_beas2">Flying Eye, Terrible Eye, Maddening Eye</a></li>
                <li>Unique: <a href="#m_undead">Lich King</a>
                  <br/>Efficiency level: very hard
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="img-container">
              <img height="730" width="1050" src={require("./assets/imgs/md-dm.jpg")} alt="Castle Darkmoor map" />
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fz">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Frozen Highlands</h2>
              <ul>
                <li>Resets every 24 months</li>
                <li>Overlord: Marquis Eric von Stromgard, Baron Anthony Stone</li>
                <li>Dungeons: 2</li>
                <li>Expert teachers: 3</li>
                <li>Master teachers: 5</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>E to <a href="#sc">Silver Cove</a> (5 days)</li>
                    <li>S to <a href="#fh">Free Haven</a> (5 days)</li>
                    <li>W to <a href="#ks">Kriegspire</a> (5 days)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li><a href="#fh">Free Haven</a> (Monday, Thursday, 3 days and 200gp)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas2">Harpy, Harpy Hag, Harpy Witch</a></li>
                <li><a href="#m_hufig">Magyar, Magyar Soldier, Magyar Matron</a></li>
                <li><a href="#m_hufig">Archer, Master Archer, Fire Archer</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/fz.jpg")} alt="Frozen Highlands" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li><a href="#fz_sg">Shadow Guild</a>
                </li>
                <li>Master Leather Armor (Arlen Sailor, rank 10, 3000gp)
                  <br/>Master Dagger (Jules Miles, rank 8, Speed 40, 5000gp)
                    <br/><a href="#q_27">quest 27</a>, <a href="#q_28">quest 28</a>, <a href="#q_33">quest 33</a>, <a
                      href="#sq_4">subquest 4</a> (Anthony Stone)
                </li>
                <li>Master Disarm Traps (Gabe Lester, rank 7, Accuracy 30, 2500gp)
                  <br/>Protection Services (Dagger, Merchant, Identify Item, Perception, Disarm Traps, 250gp each)
                </li>
                <li>Inn</li>
                <li>Fountain (release monsters)</li>
                <li>Membership to Protection Services (Marcellus Lutvig, 50gp)</li>
                <li>Master Repair Items (Ryan Treacle, rank 7, Accuracy 30, 2500gp)</li>
                <li>Weapon Store</li>
                <li>Armor Store</li>
                <li>Fountain (+10 level temporarily)</li>
                <li>Obelisk #7 <a href="#sq_7">subquest 7</a></li>
                <li>Master Diplomacy (Jacques Kohl, rank 4, fame 200, 2500gp)
                  <br/><a href="#q_34">quest 34</a>, <a href="#q_35">quest 35</a>, <a href="#q_36">quest 36</a> (Eric von
                    Stromgard)
                </li>
                <li>Expert Mace (Dickson Parks, 2000gp)
                  <br/>Expert Bow (Jed Morrison, 2000gp)
                </li>
                <li>Fountain (+30 Might temporarily)</li>
                <li>Shrine of Endurance (April), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)
                </li>
                <li>Inn</li>
                <li>Bank</li>
                <li>General Store</li>
                <li>Armor Store</li>
                <li>Blade's End (Staff, Spear, Sword, Axe, Repair Item, 750gp)</li>
                <li>Fountain (+5 Might permanently, but kills the drinker)</li>
                <li>Elements Guild (Earth Magic, Air Magic, Water Magic, Fire Magic, 1250gp, spellbooks 1-8)</li>
                <li>Dark Guild (Dark Magic, 1500gp, spellbooks 1-6)</li>
                <li>Fountain (+5 Endurance permanently, but kills the drinker)</li>
                <li>Membership to Blade's End (Fredrick Piles, 25gp)</li>
                <li>Weapon Store</li>
                <li>Alchemist Store</li>
                <li>Coach Service</li>
                <li>Fountain (release monsters)</li>
                <li>Dragon Tower for <a href="#q_36">quest 36</a></li>
                <li>Expert Dark Magic (Morton Holovin, 2000gp)</li>
                <li>Training Hall (maximum level: 50)</li>
                <li>Membership to the Dark Guild (Rachel Herzl, 1000gp)</li>
                <li>Membership to the Elements Guild (Warren Holmes, 100gp)</li>
                <li>Temple</li>
                <li><a href="#fz_ik">Icewind Keep</a></li>
                <li>Fountain (+20 Speed and Accuracy temporarily)</li>
                <li>Fountain (+20 AC temporarily)</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fz_ik">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Icewind Keep</h3>
            </td>
            <td className="w-260">
              <img height="340" width="260" src={require("./assets/imgs/fz-ik.jpg")} alt="Icewind Keep map" />
            </td>
            <td className="w-480">
              <h3>Locations</h3>
              <ol>
                <li>Chest with Remains of a Journal (useless)</li>
                <li>Switch to open door</li>
                <li>Switch to open door</li>
                <li>Switch to open secret room</li>
                <li>Dragon Tower Key for <a href="#q_35">quest 35</a> and Dragon Rider Scroll (useless)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hunoi">Ogre, Ogre Raider, Ogre Chieftan</a>
                </li>
                <li><a href="#m_hufig">Guard, Lieutenant, Captain</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="fz_sg">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Shadow Guild</h3>
            </td>
            <td className="w-350">
              <img height="330" width="350" src={require("./assets/imgs/fz-sg.jpg")} alt="Shadow Guild map" />
            </td>
            <td className="w-390">
              <h3>Locations</h3>
              <ol>
                <li>Switch to open wall</li>
                <li>Chest with Letter to Prince of Thieves Scroll (useless)</li>
                <li>Rougue Leader's room with Rogue Leader, Lesser Genie and the teleporter door</li>
                <li>Large room with traps. Jump to the same tiles around the room and you will be teleported to the
                  entrance
                  of Rougue Leader's room. Or one character smile (and some audio effect) at the north end of the room,
                  jump
                  out this room and go into the Rougue Leader's room by foot without teleporting. If sparks are coming
                  you
                  must start it again.
                </li>
                <li>The answer is "fish"</li>
                <li>The answer is "dark"</li>
                <li>The answer is "time"</li>
                <li>The answer is "arrow"</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_huthi">Thief, Burglar, Rogue</a></li>
                <li><a href="#m_huthi">Cutpurse, Bounty Hunter, Assassin</a></li>
                <li><a href="#m_beas2">Genie</a></li>
                <li>Unqiues: <a href="#m_huthi">Rogue Leader</a>, <a href="#m_beas2">Lesser Genie</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="sc">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Silver Cove</h2>
              <ul>
                <li>Resets every 24 months</li>
                <li>Overlord: Baroness Loretta Fleise</li>
                <li>Dungeons: 3</li>
                <li>Expert teachers: 4</li>
                <li>Master teachers: 6</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>W to <a href="#fz">Frozen Highlands</a> (5 days)</li>
                  </ul>
                </li>
                <li>By boat to
                  <ul>
                    <li><a href="#mi">Misty Islands</a> (Monday, Thursday, Saturday, 3 days, 300gp from south)</li>
                    <li><a href="#fh">Free Haven</a> (Tuesday, Friday, 3 days, 300gp from south)</li>
                    <li><a href="#iw">Eel Infested Waters</a>, North Island (Wednesday, 1 day, 300gp from south)</li>
                    <li><a href="#iw">Eel Infested Waters</a>, South Island (Thursday, 2 days, 200gp from north)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li><a href="#fh">Free Haven</a> (Monday, Friday, 4 days, 200gp)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas2">Stone Gargoyle, Marble Gargoyle, Diamond Gargoyle</a>
                </li>
                <li><a href="#m_hucle">Druid, Great Druid, Grand Druid</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img  width="795" height="795" src={require("./assets/imgs/sc.jpg")} alt="Silver Cove map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Inn</li>
                <li>Coach Travel</li>
                <li>General Store</li>
                <li>Fountain (+20 Intellect and Personality temporarily)</li>
                <li>Master Learning (John Tuck, rank 7, Intellect 30, 5000gp)</li>
                <li>Berserker's Fury (Bow, Chain Armor, Plate Armor, Shield, Repair Item, 625gp)</li>
                <li>Expert Repair Items (Cyrus Montebleu, 500gp)</li>
                <li>Bank</li>
                <li>Armor Store</li>
                <li>Training Hall (maximum level: 40)</li>
                <li>Expert Spear (Sigriv, 2000gp)</li>
                <li>Weapon Store</li>
                <li>Alchemist Store</li>
                <li>Master Earth Magic (Revee Botania, rank 12, 4000gp)</li>
                <li>Membership to Protection Services (Lucky Oster, 50gp)</li>
                <li>Self Guild (Mind Magic, Body Magic, Spirit Magic, 1250gp, spellbooks 1-8)</li>
                <li>Expert Meditation (Clyde Dagget, 500gp)</li>
                <li>Master Merchant (Will Ottoman, rank 7, Personality 30, 4000gp)</li>
                <li>Earth Guild (Learning, Earth Magic, 1000gp, spellbooks 1-7)</li>
                <li>Light Guild (Light Magic, 1500gp, spellbooks 1-6)</li>
                <li>Protection Services (Leather, Identify Item, Disarm Traps, Diplomacy, Perception, 300gp)</li>
                <li>Temple</li>
                <li>Town Portal point
                  <br/>Fountain (+25 spell points)
                </li>
                <li>Town Hall
                  <br/><a href="#sq_1">subquest 1</a> (Jake)
                </li>
                <li>Membership to the Berserker's Fury (Horace Rose, 50gp)</li>
                <li>Master Mind Magic (Thane Roper, rank 12, 4000gp)
                  <br/>Master Body Magic (Gilbert Hammer, rank 12, 4000gp)
                </li>
                <li>Membership to the Light Guild (Virginia Standridge, 1000gp)</li>
                <li>Expert Light Magic (Tina Sheltan, 2000gp)</li>
                <li>Membership to the Earth Guild (Holly Struthers, 50gp)</li>
                <li>Membership to the Self Guild (Isaac Streetman, 100gp)</li>
                <li><a href="#q_31">quest 31</a> (Eleanor Vanderbilt)</li>
                <li><a href="#q_29">quest 29</a>, <a href="#q_30">quest 30</a>, <a href="#q_32">quest 32</a> (Loretta
                  Fleise)
                </li>
                <li>Dragon Tower for <a href="#q_36">quest 36</a></li>
                <li>Docks</li>
                <li>Fountain (+2 Accuracy permanently)</li>
                <li>Fountain (+2 Speed permanently)</li>
                <li><a href="#sc_mo">Monolith</a></li>
                <li><a href="#sc_wf">Warlord's Fortress</a></li>
                <li>Shrine of Personality (March), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)
                </li>
                <li>Obelisk #10 <a href="#sq_7">subquest 7</a></li>
                <li>Inn
                  <br/>Master Staff (Jasper Rice, rank 8, 5000gp)
                </li>
                <li>Fountain (Insanity)</li>
                <li>Docks</li>
                <li>Circle of Stones (<a href="#q_29">quest 29</a>)</li>
                <li><a href="#sc_sh">Silver Helm Stronghold</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="sc_mo">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Monolith</h3>
            </td>
            <td className="w-265">
              <img height="265" width="265" src={require("./assets/imgs/sc-tm.jpg")} alt="Monolith map" />
            </td>
            <td className="w-475">
              <h3>Locations</h3>
              <ol>
                <li>Scrap of Papers Scroll (useless)</li>
                <li>Chest with Cedric Druther Scroll (useless)</li>
                <li>Evil Altar (+5 Personality for Druids and Clerics permanently) for <a href="#q_31">quest 31</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hucle">Druid, Great Druid, Grand Druid</a></li>
                <li><a href="#m_elem">Rock Beast, Earth Spirit, Earth Elemental</a></li>
                <li><a href="#m_elem">Water Beast, Water Spirit, Water Elemental</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="sc_wf">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Warlord's Fortress</h3>
            </td>
            <td className="w-260">
              <img height="200" width="260" src={require("./assets/imgs/sc-wf.jpg")} alt="Warlord's Fortress map" />
            </td>
            <td className="w-480">
              <h3>Locations</h3>
              <ol>
                <li>Chest with Storage Key</li>
                <li>Chest with Discharge Paper Scroll for <a href="#q_22">quest 22</a> (this is the proof)</li>
                <li>Chest with Storage Key</li>
                <li>Storage Room (need 2 Storage Key)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hufig">Thug, Ruffian, Brigand</a></li>
                <li><a href="#m_hufig">Fighter, Soldier, Veteran</a></li>
                <li><a href="#m_undead">Death Knight, Doom Knight, Cuisinart</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="sc_sh">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Silver Helm Stronghold</h3>
            </td>
            <td className="w-200">
              <img height="240" width="200" src={require("./assets/imgs/sc-sh.jpg")} alt="Silver Helm Stringhold map" />
            </td>
            <td className="w-540">
              <h3>Locations</h3>
              <ol>
                <li>Ghost of John Silver will be pleased if <a href="#q_11">quest 11</a> is completed, and show him the
                  Ankh.
                </li>
                <li>Chest with Elegant Letter Scroll (useless)</li>
                <li>Gerrard Blacknames with Ankh for <a href="#sq_4">subquest 4</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hufig">Swordsman, Expert Swordsman, Master Swordsman</a></li>
                <li><a href="#m_hufig">Fighter, Soldier, Veteran</a></li>
                <li><a href="#m_humag">Sorcerer, Magician, Warlock</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="bs">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Blackshire</h2>
              <ul>
                <li>Resets every 24 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 2</li>
                <li>Expert teachers: 1</li>
                <li>Master teachers: 3</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>E to <a href="#fh">Free Haven</a> (5 days)</li>
                    <li>N to <a href="#ks">Kriegspire</a> (5 days)</li>
                    <li>W to <a href="#pv">Paradise Valley</a> (5 days)</li>
                    <li>S to <a href="#ds">Dragonsands</a> (5 days)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li><a href="#fh">Free Haven</a> (Tuesday, Friday, 3 days, 250gp)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas2">Wolfman, Werewolf, Greater Werewolf</a></li>
                <li><a href="#m_elem">Dust Devil, Air Spirit, Air Elemental</a></li>
                <li><a href="#m_beas3">Fire Lizard, Lightning Lizard, Thunder Lizard</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/bs.jpg")} alt="Blackshire map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Shrine of Magic (December), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)
                </li>
                <li>Fountain (+50 luck temporarily)</li>
                <li>Inn</li>
                <li>Armor Store</li>
                <li>Training Hall</li>
                <li>Weapon Store</li>
                <li>Dragon Tower for <a href="#q_36">quest 36</a></li>
                <li>Master Shield (Bronwyn Meck, rank 10, 5000gp)</li>
                <li>Temple</li>
                <li>Fountain (+30 Magic Resistance temporarily, but turns the drinker to stone)</li>
                <li><a href="#q_37">quest 37</a> (Joanne Cravitz)</li>
                <li>Fountain (+5 Magic Resistance permanently, but diseases the drinker)</li>
                <li>Master Sword (Guy Hampton, rank 8, Cavaliers)</li>
                <li>Master Mace (Errol Ostermann, rank 8, Might 40, 5000gp)</li>
                <li>Dark Guild (Dark Magic, 2000gp, spellbooks 1-10)</li>
                <li>Light Guild (Light Magic, 2000gp, spellbooks 1-10)</li>
                <li><a href="#q_38">quest 38</a> (Maria Trepan)</li>
                <li>Alchemist Store
                  <br/>Smuggler's Guid (Leather Armor, Identify Item, Disarm Trap, Diplomacy, Perception, 250gp each)
                </li>
                <li>Membership to the Smuggler's Guild (Tess Tucker, 50gp)</li>
                <li><a href="#q_39">quest 39</a> (Twillen)</li>
                <li>Membership to the Dark Guild (Rebecca Calaway, 1000gp)</li>
                <li>Membership to the Light Guild (Marton Ferris, 1000gp)</li>
                <li>Expert Dark Magic (Ambrose Brusse, 2000gp)</li>
                <li>Bank</li>
                <li>General Store</li>
                <li>Coach Travel</li>
                <li>Fountain (+50 spell points)</li>
                <li><a href="#bs_lw">Lair of the Wolf</a></li>
                <li>Chest with Lord Kilburn's Shield for <a href="#q_12">quest 12</a></li>
                <li>Temple Baa</li>
                <li><a href="#bs_ts">Temple of the Snake</a></li>
                <li>Fountain (+5 Intellect and Personality permanently, but diseases the drinker)</li>
                <li>Circus (April-July). Nicolai is here, if running <a href="#q_10">quest 10</a>.</li>
                <li>Inn</li>
                <li>Obelisk #5 <a href="#sq_7">subquest 7</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="bs_lw">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-265">
              <h3>Lair of the Wolf</h3>
              <ul>
                <li><a href="#m_beas2">Wolfman, Werewolf, Greater Werewolf</a></li>
                <li><a href="#m_beas1">Ooze, Acidic Ooze, Corrosive Ooze</a></li>
                <li><a href="#m_hufig">Swordsman, Expert Swordsman, Master Swordsman</a></li>
                <li>Unique: <a href="#m_beas2">Werewolf Leader</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
            <td className="w-710">
              <img height="1090" width="710" src={require("./assets/imgs/bs-lw.jpg")} alt="Lair of the Wolf map" />
            </td>
            <td className="w-265">
              <h3>Locations</h3>
              <ol>
                <li><a href="#q_40">quest 40</a>, <a href="#sq_3">subquest 3</a> (Ghost of Baltazar)</li>
                <li>Pearl of Purity for and for <a href="#q_38">quest 38</a> and <a href="#sq_3">subquest 3</a></li>
                <li>Wolf Altar (touch with Pearl of Purity to open wall) for <a href="#q_38">quest 38</a></li>
                <li>Walking through this place release monsters</li>
                <li>Walking through this place release monsters</li>
                <li>Walking through this place release monsters</li>
                <li>Walking through this place release monsters</li>
                <li>Switch for open wall</li>
                <li>Walking through this place release monsters</li>
                <li>Werewolf Leader with the Pearl of Putrescence for <a href="#q_40">quest 40</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="bs_ts">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Temple of the Snake</h3>
            </td>
            <td className="w-240">
              <img height="140" width="240" src={require("./assets/imgs/bs-ts.jpg")} alt="Temple of the Snake map" />
            </td>
            <td className="w-500">
              <h3>Locations</h3>
              <ol>
                <li>Switch to open wall</li>
                <li>Switch to lift</li>
                <li>Switch to open wall</li>
                <li>Cage with Emmanual Cravitz for <a href="#q_37">quest 37</a></li>
                <li>Q with Horn of Ros (this item is one of the best: indicate the HPs of enemies)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_beas2">Medusa, Medusa Enchantress, Gorgon</a></li>
                <li><a href="#m_beas3">Gold Dragon</a></li>
                <li>Unique: <a href="#m_humag">Q</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ks">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Kriegspire</h2>
              <ul>
                <li>Resets every 8 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 5</li>
                <li>Expert teachers: 1</li>
                <li>Master teachers: 1</li>
              </ul>
              <br/>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>E to <a href="#fz">Frozen Highlands</a> (5 days)</li>
                    <li>S to <a href="#bs">Blackshire</a> (5 days)</li>
                    <li>W to <a href="#sw">Sweet Water</a> (5 days)</li>
                  </ul>
                </li>
                <li>By coach to
                  <ul>
                    <li><a href="#fh">Free Haven</a> (Wednesday, Saturday, 3 days, 250gp)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_hunoi">Minotaur, Minotaur Mage, Minotaur King</a></li>
                <li><a href="#m_elem">Rock Beast, Earth Spirit, Earth Elemental</a></li>
                <li><a href="#m_beas3">Frost Drake, Flame Drake, Energy Drake</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/ks.jpg")} alt="Kriegspire map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Alchemist Store</li>
                <li>Coach Service</li>
                <li>Inn</li>
                <li>Fountain (+30 level temporarily)</li>
                <li>Training Hall (Maximum Level: 80)</li>
                <li>Armor Store</li>
                <li>Weapon Store</li>
                <li>Fountain (teleport to <a href="#ks_ck">Castle Kriegspire</a>)</li>
                <li><a href="#q_41">quest 41</a> (Emil Lime)</li>
                <li>Fountain (+10 Magic Resistance permanently, but eradicates the drinker)</li>
                <li>Fountain (5.000gp for 5.000 xp)</li>
                <li>Expert Light Magic (Nicholas Roth, 2000gp)</li>
                <li><a href="#ks_st">Superior Temple of Baa</a></li>
                <li>Fountain (+5 Elemental Resistances permanently, but kills the drinker)</li>
                <li>Fountain (+40 AC temporarily)</li>
                <li>Shrine of Fire (August), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)</li>
                <li><a href="#ks_ck">Castle Kriegspire</a>
                  <br/>Master Bow (Desmond Weller, rank 8, Battle Mages)
                </li>
                <li><a href="#ks_do">Devil's Outpost</a></li>
                <li><a href="#ks_cd">Caves of the Dragon Rider</a></li>
                <li>Obelisk #4 <a href="#sq_7">subquest 7</a></li>
                <li><a href="#ks_al">Agar's Laboratory</a></li>
                <li>Shrine of Cold (October), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)</li>
                <li>Hermit for <a href="#q_34">quest 34</a></li>
                <li>Pedestal for <a href="#q_39">quest 39</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ks_do">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Devil's Outpost</h3>
            </td>
            <td className="w-120">
              <img height="120" width="120" src={require("./assets/imgs/ks-do.jpg")} alt="Devil's Outpost map" />
            </td>
            <td className="w-620">
              <h3>Locations</h3>
              <ol>
                <li>Devil of Baa with Devil Plans Scroll for <a href="#q_17">quest 17</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_beas3">Devil Spawn, Devil Worker, Devil Warrior</a></li>
                <li>Unique: <a href="#mu_BaaDevil">Devil of Baa</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ks_st">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>Superior Temple of Baa</h3>
              <ul>
                <li><a href="#m_hucle">Acolyte of Baa, Cleric of Baa, Priest of Baa</a></li>
                <li><a href="#m_humag">Sorcerer, Magician, Warlock</a></li>
                <li><a href="#m_hucle">Druid, Great Druid, Grand Druid</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
            <td className="w-550">
              <img height="530" width="550" src={require("./assets/imgs/ks-tb.jpg")} alt="Superior Tmple of Baa map" />
            </td>
            <td className="w-390">
              <h3>Locations</h3>
              <ol>
                <li>Entrance (need Baa Cloak, when running <a href="#q_42">quest 42</a>)</li>
                <li>Podium with information of Baa test for <a href="#sq_5">subquest 5</a></li>
                <li>Chest with Letter from Zenofex Scroll for <a href="#q_42">quest 42</a> (need 2 keys, if you have no
                  key,
                  touching the chest release monsters)
                </li>
                <li>Priest of Baa with High Sorcerer's Key for chest</li>
                <li>Press Baa Head 1,2,3,4 for <a href="#sq_5">subquest 5</a></li>
                <li>Priest of Baa with High Cleric's Key for chest</li>
                <li> for <a href="#sq_5">subquest 5</a> (Almighty Head of Baa)</li>
              </ol>
              <ul>Any important things:
                <li>Door opener need expert (or master) Perception</li>
                <li>Temple Gongs for Lawrence Aleman in <a href="#fh">Free Haven</a></li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ks_ck">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Castle Kriegspire</h3>
            </td>
            <td className="w-380">
              <img height="280" width="380" src={require("./assets/imgs/ks-ck.jpg")} alt="Castle Kriegspire map" />
            </td>
            <td className="w-360">
              <h3>Locations</h3>
              <ol>
                <li>Chest with Jeveled Egg for <a href="#q_41">quest 41</a></li>
                <li>Kurator of Kriegspire (heal for 10000gp, but -976 karma!)</li>
                <li>Guardian of Kriegspire (teleport to the switch for 50000gp, but the switch can reach easily another
                  way
                  too)
                </li>
                <li>Switch to open secret room</li>
                <li>Secret room's door (need pushing switch)</li>
                <li>Lurch</li>
                <li>Memory Crystal Epsilon for <a href="#q_45">quest 45</a></li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hunoi">Minotaur, Minotaur Mage, Minotaur King</a></li>
                <li><a href="#m_beas1">Agar's Pet, Agar's Monster, Agar's Abomination</a></li>
                <li><a href="#m_beas3">Flame Drake, Frost Drake, Energy Drake</a></li>
                <li>Unique: <a href="#m_hunoi">Lurch</a>
                  <br/>Efficiency level: very hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ks_al">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Agar's Laboratory</h3>
            </td>
            <td className="w-200">
              <img height="400" width="200" src={require("./assets/imgs/ks-al.jpg")} alt="Agar's Laboratory map" />
            </td>
            <td className="w-540">
              <h3>Locations</h3>
              <ol>
                <li>Chandelier with a diamond
                </li>
                <li>Switch to open lift door (and release monsters)
                </li>
                <li>Switch to open lift door (and release monsters)
                </li>
                <li>Switch to release monsters
                </li>
                <li>Agar's Journal Scroll (useless)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_beas2">Flying Eye, Terrible Eye, Maddening Eye</a>
                </li>
                <li><a href="#m_beas1">Agar's Pet, Agar's Monster, Agar's Abomination</a>
                </li>
                <li>Unique: <a href="#m_undead">Agar</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ks_cd">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Caves of the Dragon Riders</h3>
            </td>
            <td className="w-350">
              <img height="350" width="350" src={require("./assets/imgs/ks-dr.jpg")} alt="Caves of the Dragon Riders map" />
            </td>
            <td className="w-390">
              <h3>Locations</h3>
              <ol>
                <li>Chest Diary Page Scroll (useless)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_beas3">Wyrm, Giant Wyrm, Great Wyrm</a></li>
                <li><a href="#m_undead">Death Knight, Doom Knight, Cuisinart</a>
                  <br/>Efficiency level: very hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="iw">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Eel Infested Waters</h2>
              <ul>
                <li>Resets every 8 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 1</li>
                <li>Expert teachers: 1</li>
                <li>Master teachers: 1</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By boat to
                  <ul>
                    <li><a href="#sc">Silver Cove</a> (Monday, 2 days, 400gp, from north)</li>
                    <li>North Island (Saturday, 1 day, 200gp, from south)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas1">Agar's Pet, Agar's Monster, and Agar's Abomination</a></li>
                <li><a href="#m_beas2">Sea Serpent, Sea Monster, and Sea Terror</a></li>
                <li><a href="#m_elem">Water Beast, Water Spirit, and Water Elemental</a>
                  <br/>Efficiency level: medium
                </li>
              </ul>
              <br/>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/iw.jpg")} alt="Eel Infested Waters map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Inn</li>
                <li>Expert Ancient Weapons (Pat Skylark)</li>
                <li>Alchemist Store</li>
                <li>Temple</li>
                <li><a href="#iw_ca">Castle Alamos</a></li>
                <li>Docks</li>
                <li>Fountain (+20 Magic Resistance temporarily)</li>
                <li>Inn
                  <br/>Master Light Magic (Ki Lo Nee, need Saintly Reputation)
                </li>
                <li>Docks</li>
                <li>Shrine of Poison (November), ask <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32)
                </li>
                <li>Obelisk #13 <a href="#sq_7">subquest 7</a></li>
                <li>Fountain (+20 Elemental Resistances temporarily)</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="iw_ca">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>Castle Alamos</h3>
              <ul>
                <li><a href="#m_hufig">Magyar, Magyar Soldier, Magyar Matron</a></li>
                <li><a href="#m_humag">Sorcerer, Magician, Warlock</a></li>
                <li><a href="#m_elem">Dust Devil, Twister, Air Elemental</a>
                  <br/>Efficiency level: very hard
                </li>
              </ul>
            </td>
            <td className="w-550">
              <img height="500" width="550" src={require("./assets/imgs/iw-ca.jpg")} alt="Castle Alamos map" />
            </td>
            <td className="w-390">
              <h3>Locations</h3>
              <ol>
                <li>J Tree "The first into the half the forth plus one, better hurry or you'll be done!"</li>
                <li>B Tree "The second is next to the third, ho so pretty like a bird!"</li>
                <li>A Tree "The third is first of twenty six, A through Z you'll have to mix!"</li>
                <li>R Tree "The forth is eight from the end, Archibald really is your friend!"</li>
                <li>D Tree "The fifth is twice the second, five letters in all I reckon!"</li>
                <li>Chest with Teleporter Key</li>
                <li>Chest with Treasure Room Key</li>
                <li>Treasure Room (need Treasure Room Key)</li>
                <li>Teleport Room (need Teleport Key)</li>
                <li>Room without door (need to use teleporter to here)</li>
                <li>Restricted area (use the lift, and the code is JBARD)</li>
                <li>Memory Crystal Beta for <a href="#q_45">quest 45</a></li>
                <li>Teleporter to #10</li>
                <li>Switch to the open door #15</li>
                <li>Door (need pushing the switch)</li>
                <li>Warlock with Letter to Gharik (useless)</li>
                <li>Pool (release monsters)</li>
              </ol>
              <ul>Any important things:
                <li>Gems for selling</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ds">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Dragonsands</h2>
              <ul>
                <li>Resets every 6 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 2</li>
                <li>Expert teachers: -</li>
                <li>Master teachers: -</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>N to <a href="#bs">Blackshire</a> (5 days)</li>
                    <li>W to <a href="#hi">Hermit's Isle</a> (5 days)</li>
                    <li>E to <a href="#md">Mire of the Damned</a> (5 days)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas3">Fire Lizard, Lightning Lizard, Thunder Lizard</a></li>
                <li><a href="#m_beas3">Wyrm, Giant Wyrm, Great Wyrm</a></li>
                <li><a href="#m_beas3">Red Dragon, Blue Dragon, Gold Dragon</a>
                  <br/>Efficiency level: extremely hard
                </li>
              </ul>
              <br/>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/ds.jpg")} alt="Dragonsands map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Seeking Golden Pyramids or Kegs of Wine for Armor (Najat Ramadi)</li>
                <li>Seeking Golden Pyramids or Kegs of Wine for Weapons (Kerman Murian)</li>
                <li>Seeking Golden Pyramids or Kegs of Wine for Miscellaneous Equipment (Irbil Baktarian)</li>
                <li>Seeking Magic Lamps for Gems (Bandar Jahrom)</li>
                <li>Pedestal for <a href="#q_39">quest 39</a></li>
                <li>Fountain (+50 hit points)</li>
                <li>Fountain (+10 Elemental Resistances permanently, but eradicates the drinker)</li>
                <li>Fountain (+10 all statistics permanently, but eradicates the drinker)</li>
                <li><a href="#ds_tv">Tomb of VARN</a></li>
                <li>Shrine of the Gods (+20 all statistics permanently)
                  <br/>Invisible teleporter to <a href="#ds_nw">New World Computing</a> (at inner side)
                    <br/>Invisible teleporter to <a href="#ns">New Sorpigal</a> (at tilt of sword)
                </li>
                <li>Obelisk #6 <a href="#sq_7">subquest 7</a></li>
                <li>Rock for <a href="#sq_7">subquest 7</a></li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ds_tv">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-250">
              <h3>Tomb of VARN</h3>
              <ul>
                <li><a href="#m_beas2">Genie, Djinn, Efreet</a></li>
                <li><a href="#m_hunoi">Defender of VARN, Sentinel of VARN, Guardian of VARN</a></li>
                <li><a href="#m_robot">Patrol Unit, Enforcer Unit, Terminator Unit</a>
                  <br/>Efficiency level: very hard
                </li>
              </ul>
            </td>
            <td className="w-710">
              <img height="950" width="710" src={require("./assets/imgs/ds-tv.jpg")} alt="Tomb of VARN map" />
            </td>
            <td className="w-280">
              <h3>Locations</h3>
              <ol>
                <li>Tapestry with information</li>
                <li>Tapestry with information</li>
                <li>Sentinel of Varn with Bacdoor Key</li>
                <li>Plaque with information (2 sides)</li>
                <li>Plaque with information (2 sides)</li>
                <li>Chest with Flame Door Key, Captain's Code Scroll, Crystal Skull for absorbing radioactivity</li>
                <li>Backdoor (need Backdoor Key)</li>
                <li>Flamedoor (need Flamedoor Key)</li>
                <li>Plaque with information (2 sides)</li>
                <li>Chest with First Mate's Code Scroll, Water Temple Key</li>
                <li>Books with Communication Officer's Code Scroll</li>
                <li>Books with Engineer's Code Scroll</li>
                <li>Chest with Doctor's Code Scroll, VARN Chest Key (need Bibliotheca Chest Key)</li>
                <li>Water Temple (need Water Temple Key)</li>
                <li>Chest with Navigator's Code Scroll, Bibliotheca Chest Key, Crystal Skull for absorbing radioactivity
                </li>
                <li>Cleansing Pool (Engineer's Code): yttocs</li>
                <li>Cleansing Pool (First Mate's Code): kcops</li>
                <li>Cleansing Pool (Doctors's Code): yoccm</li>
                <li>Cleansing Pool (Navigator's Code): ulus</li>
                <li>Cleansing Pool (Communication Officer's Code): aruhu</li>
                <li>Well of VARN (Captain's Code): krik</li>
                <li>Chest with Control Cube for <a href="#q_49">quest 49</a> (need VARN Chest Key)</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ds_nw">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>New World Computing</h3>
            </td>
            <td className="w-200">
              <img height="280" width="200" src={require("./assets/imgs/ds-nw.jpg")} alt="New World Computing map" />
            </td>
            <td className="w-540">
              <h3>Locations</h3>
              <ol>
                <li>Desk (Day of the Gods effect)</li>
                <li>Pantry (+food, poison and drunk effect)</li>
                <li>Potions for sale (potions for money)</li>
              </ol>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hunoi">Goblin Shaman, Goblin King</a>
                  <br/>Efficiency level: very easy
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="hi">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Hermit's Isle</h2>
              <ul>
                <li>Resets every 6 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 1</li>
                <li>Expert teachers: -</li>
                <li>Master teachers: -</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>N to <a href="#pv">Paradise Valley</a> (5 days)</li>
                    <li>E to <a href="#ds">Dragonsands</a> (5 days)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas2">Sea Serpent, Sea Monster, Sea Terror</a></li>
                <li><a href="#m_beas3">Hydra, Venomous Hydra, Colossal Hydra</a></li>
                <li><a href="#m_hunoi">Titan, Noble Titan, Supreme Titan</a>
                  <br/>Efficiency level: extremely hard
                </li>
              </ul>
              <br/>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/hi.jpg")} alt="Hermit's Isle map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li><a href="#hi_st">Supreme Temple of Baa</a></li>
                <li>Obelisk #3 <a href="#sq_7">subquest 7</a></li>
                <li>Fountain (remove unnatural aging)</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="hi_st">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-200">
              <h3>Supreme Temple of Baa</h3>
            </td>
            <td className="w-400">
              <img height="300" width="400" src={require("./assets/imgs/hi-sb.jpg")} alt="Supreme Temple of Baa" />
            </td>
            <td className="w-340">
              <h3>Locations</h3>
              <ol>
                <li>Teleporter to <a href="#fh_se">Free Haven Sewers</a> at <a href="#fh">Free Haven</a></li>
                <li><a href="#sq_6">subquest 6</a> (Altars of Pain, of Cold, of Fire)</li>
                <li>Altar of Earth for <a href="#sq_6">subquest 6</a></li>
                <li>Altar of Air for <a href="#sq_6">subquest 6</a></li>
                <li>Altar of Water for <a href="#sq_6">subquest 6</a></li>
                <li>Altar of Fire for <a href="#sq_6">subquest 6</a></li>
                <li>Switches to change other bridges</li>
                <li>Memory Crystal Alpha for <a href="#q_44">quest 44</a></li>
                <li>Slicker Silvertoungue</li>
                <li>Chest (release monsters)</li>
              </ol>
              <ul>Any important things:
                <li>Temple Gongs for Lawrence Aleman in <a href="#fh">Free Haven</a></li>
                <li>Gems from crystals for selling</li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_hucle">Acolyte of Baa, Cleric of Baa, Priest of Baa</a></li>
                <li><a href="#m_beas3">Devil Spawn, Devil Worker, Devil Warrior</a></li>
                <li><a href="#m_elem">Fire Beast, Fire Spirit, Fire Elemental</a></li>
                <li>Unique: <a href="#m_hucle">Slicker Silvertoungue</a>
                  <br/>Efficiency level: hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="pv">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Paradise Valley</h2>
              <ul>
                <li>Resets every 6 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: -</li>
                <li>Expert teachers: -</li>
                <li>Master teachers: 2</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>N to <a href="#sw">Sweet Water</a> (5 days)</li>
                    <li>S to the <a href="#hi">Hermit's Isle</a> (5 days)</li>
                    <li>E to <a href="#bs">Blackshire</a> (5 days)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas3">Red Dragon, Blue Dragon, Gold Dragon</a></li>
                <li><a href="#m_beas3">Hydra, Venomous Hydra, Colossal Hydra</a></li>
                <li><a href="#m_hunoi">Titan, Noble Titan, Supreme Titan</a></li>
                <li><a href="#m_beas2">Sea Serpent, Sea Monster, Sea Terror</a>
                  <br/>Efficiency level: extremely hard
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/pv.jpg")} alt="Paradise Valley map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Master Dark Magic (Su Lang Manchu, need Notorious Reputation)</li>
                <li>Master Ancient Weapon (Rexella, 5000gp, need a Blaster)</li>
                <li>Alchemist Store</li>
                <li>Weapon Store</li>
                <li>Armor Store</li>
                <li>Inn</li>
                <li>Training Hall (Maximum Level: No limit)</li>
                <li>Obelisk #2 <a href="#sq_7">subquest 7</a></li>
                <li>Temple Baa</li>
                <li>Fountain (+100 spell and hit points)</li>
                <li>Chest (can reach with Telekinesis Spell only)</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="sw">
        <table className="w-1240">
          <tbody>
          <tr>
            <td className="w-300">
              <h2>Sweet Water</h2>
              <ul>
                <li>Resets every 8 months</li>
                <li>Overlord: -</li>
                <li>Dungeons: 1</li>
                <li>Expert teachers: -</li>
                <li>Master teachers: -</li>
              </ul>
            </td>
            <td className="w-503">
              <h3>Travel</h3>
              <ul>
                <li>By foot
                  <ul>
                    <li>S to <a href="#pv">Paradise Valley</a> (5 days)</li>
                    <li>E to <a href="#ks">Kriegspire</a> (5 days)</li>
                  </ul>
                </li>
              </ul>
            </td>
            <td className="w-437">
              <h3>Monsters</h3>
              <ul>
                <li><a href="#m_beas3">Devil Spawn, Devil Worker, Devil Warrior</a></li>
                <li><a href="#m_beas3">Devil Captain, Devil Master, Devil King</a>
                  <br/>Efficiency level: very hard
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="w-795">
              <img width="795" height="795" src={require("./assets/imgs/sw.jpg")} alt="Sweet Water map" />
            </td>
            <td className="w-437">
              <h3>Locations</h3>
              <ol>
                <li>Fountain (+50 statistics temporarily)</li>
                <li>Obelisk #1 <a href="#sq_7">subquest 7</a></li>
                <li>Pedestal for <a href="#q_39">quest 39</a></li>
                <li><a href="#sw_hi">The Hive</a></li>
                <li>Chest (unopenable)</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="sw_hi">
        <table className="w-1240 dungeon">
          <tbody>
          <tr>
            <td className="w-300">
              <h3>The Hive</h3>
              <p>Resets every 7 days</p>
            </td>
            <td className="w-440">
              <img height="630" width="440" src={require("./assets/imgs/sw-hi.jpg")} alt="The Hive map" />
            </td>
            <td className="w-300">
              <h3>Locations</h3>
              <ol>
                <li>Chest with Hive Sanctum Key</li>
                <li>Keg (+20 hit points for endless using)</li>
                <li>Door (need Hive Sanctum Key)</li>
                <li>Door (Openable from #5 only)</li>
                <li>Lower Cave Door (openable with #6, or walking from #7)</li>
                <li>Backdoor to Exit</li>
                <li>Switch 1</li>
                <li>Switch 2</li>
                <li>Teleporter to Exit</li>
                <li>Door (openable with Switch 1-2)</li>
                <li>Switch 3</li>
                <li>Door (openable with Switch 3)</li>
                <li>Switch for turning off the flushing system</li>
                <li>Reactor</li>
                <li>Demon Queen</li>
                <li>Exit for <a href="#sq_10">Subquest 10</a></li>
              </ol>
              <ul>Any important things:
                <li>The reactor's death releases monsters and removes all spells from party. Run to the Queen's room and
                  cast
                  the spells again before lost mana.
                </li>
                <li>Don't save the game if you see the queen, because after loading she will disappear. (BUG!)</li>
                <li>Be sure that you have the Ritual of the Void Scroll from Archibald Ironfist, or you will destroy
                  Enroth.
                  (Try it, FUN!)
                </li>
              </ul>
            </td>
            <td className="w-300">
              <ul>
                <li><a href="#m_beas3">Devil Spawn, Devil Worker, Devil Warrior</a></li>
                <li><a href="#m_beas3">Devil Captain, Devil Master, Devil King</a></li>
                <li>Uniques: <a href="#m_beas3">Demon Queen</a>, <a href="#m_robot">Reactor</a>
                  <br/>Efficiency level: extremely hard
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="tq">
        <h3>Quests (shown in your quest list)</h3>
        <ol>
          <li id="q_1">Show Sulman's Letter to Andover Potbello.
            <ul>
              <li>Mission: Unknown, but <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32) gives you this
                advice too
              </li>
              <li>Solution: You start the game with this quest, and with the letter. Go into the Inn of <a href="#ns">New
                Sorpigal</a> and show it to Andover Potbello.
              </li>
              <li>Reward: 1000gp, 3.000 xp, 0 karma</li>
              <li>Award: -</li>
            </ul>
            <br/>
          </li>
          <li id="q_2">Bring Sulman's Letter to Regent Wilbur Humphrey.
            <ul>
              <li>Mission: Andover Potbello in <a href="#ns">New Sorpigal</a> (#1) (<a href="#tr">Seer</a> in <a
                href="#ci">Castle
                Ironfist</a> (#32) gives you this advice too)
              </li>
              <li>Solution: Go into the castle at <a href="#ci">Castle Ironfist</a> and show it to Regent Wilbur
                Humphrey.
              </li>
              <li>Reward: 5000gp, 3.000 xp, 0 karma</li>
              <li>Award: <i>Delivered 6th Letter to Wilbur Humphrey</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_3">Find the combination to the vault door in Goblinwatch.
            <ul>
              <li>Mission: Janice in <a href="#ns">New Sorpigal</a> (#21)</li>
              <li>Solution: Go into the <a href="#ns_gw">Goblinwatch</a> at <a href="#ns">New Sorpigal</a> and bring
                back
                the
                Combination Scroll.
              </li>
              <li>Reward: 2000gp, 2.000 xp, +50 karma</li>
              <li>Award: <i>Solved the Goblinwatch Combination</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_4">Retrieve the Candelabra.
            <ul>
              <li>Mission: Andover Potbello in <a href="#ns">New Sorpigal</a> (#1)</li>
              <li>Solution: Go into the <a href="#ns_at">Abandoned Temple</a> at <a href="#ns">New Sorpigal</a>, and
                bring
                back the item to him.
              </li>
              <li>Reward: 1000gp, 2.000 xp, -200 karma</li>
              <li>Award: <i>Retrieved the Baa Candelabra</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_5">Kill the Queen of the Spiders.
            <ul>
              <li>Mission: Buford T. Allman in <a href="#ns">New Sorpigal</a> (#7)</li>
              <li>Solution: Go into the <a href="#ns_at">Abandoned Temple</a> at <a href="#ns">New Sorpigal</a>, and
                bring
                back the heart of queen to him.
              </li>
              <li>Reward: 1000gp, 3.000 xp, 0 karma</li>
              <li>Award: <i>Killed the Spider Queen</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_6">Rescue Sharry.
            <ul>
              <li>Mission: Frank Fairchild in <a href="#ns">New Sorpingal</a> (#21)</li>
              <li>Solution: Go into the <a href="#ci_sg">Shadow Guild Hideout</a> at <a href="#ci">Castle
                Ironfist</a> and
                return with her.
              </li>
              <li>Reward: 2000gp, 10.000 xp, 0 karma</li>
              <li>Award: <i>Rescued Sharry</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_7">Rescue Angela.
            <ul>
              <li>Mission: Violet Dawson in <a href="#ns">New Sorpingal</a> (#6)</li>
              <li>Solution: Go into the <a href="#ns_at">Abandoned Temple</a> at <a href="#ns">New Sorpingal</a> and
                return
                with her.
              </li>
              <li>Reward: 500gp, 10 food, 1.000 xp, 0 karma</li>
              <li>Award: <i>Rescued Angela</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_8">Get the Chime of Harmony.
            <ul>
              <li>Mission: Janice in <a href="#ns">New Sorpingal</a> (#21)</li>
              <li>Solution: Go into the <a href="#ci_tb">Temple of Baa</a> at <a href="#ci">Castle Ironfist</a> and
                bring
                back
                the item.
              </li>
              <li>Reward: 5000gp, 10.000 xp, +50 karma</li>
              <li>Award: <i>Returned with the Chime of Harmony</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_9">Retrieve the Harp.
            <ul>
              <li>Mission: Andrew Besper in <a href="#ci">Castle Ironfist</a> (#6)</li>
              <li>Solution: Go into the <a href="#ci_dc">Dragoon's Caverns</a> at <a href="#ci">Castle Ironfist</a> and
                bring
                back the item.
              </li>
              <li>Reward: 5000gp, 10.000 xp, +50 karma</li>
              <li>Award: <i>Retrieved Andrew's Harp</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_10">Find and return Prince Nicolai. (#24)
            <ul>
              <li>Mission: Nobody (Talk to Prince Nikolai in castle at <a href="#ci">Castle Ironfist</a> (#24), leave
                the
                castle, click on rest icon, Nicolai disappeares).
              </li>
              <li>Solution: Go into the main tent of Circus, talk to Nicolai, and return with him. While this quest is
                in
                progress, you cannot visit the castle. The circus is at <a href="#bb">Bootleg
                  Bay</a> (December-March), <a
                  href="#bs">Blackshire</a> (April-July), <a href="#md">Mire of the Damned</a> (August-November).
              </li>
              <li>Reward: 0gp, 7.500 xp, 0 karma</li>
              <li>Award: <i>Returned the Prince</i>, but not shown (BUG!)
                <br/>There are six tents at circus that each have a game that test one of six primary stats. 50gp to play
                  each
                  time. You can win a Lodestone, a Harpy Feather, or a Four Leaf Clover. Play in one of tent with
                  character,
                  who
                  has the highest skill. In the big tent you can trade. A Lodestone is worth 1 point; a Harpy Feather is
                  worth 3
                  points and a Four Leaf Clover is worth 5. You can buy a keg of wine for 10 or a golden pyramid for 30.
                  Davis
                  Carp is seeking Lodestones, Bonnie Rotterdam is seeking Harpy Feathers, Geoff Southy is seeking Four
                  Leaf
                  Clovers, Nick Fenster is seeking Kegs of Wine, and Renee Blackburn is seeking Golden Pyramids at <a
                    href="#fh">Free Haven</a>. But the best choice is to go to Najat Ramadi, Kerman Murian, or Irbil
                  Baktarian
                  at <a href="#ds">Dragonsands</a> with pyramids, and to buy great items.
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_11">Rescue a Damsel in Distress.
            <ul>
              <li>Mission: Regent Wilbur Humphrey in <a href="#ci">Castle Ironfist</a> (#24)</li>
              <li>Solution: Go into the <a href="#mi_sh">Silver Helm Outpost</a> at <a href="#mi">Misty Islands</a> and
                return
                with Melody Silver.
              </li>
              <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Received promotion to (honorary) Crusader</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_12">Find Lord Kilburn's Shield.
            <ul>
              <li>Mission: Regent Wilbur Humphrey in <a href="#ci">Castle Ironfist</a> (#24), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go to middle of <a href="#bs">Blackshire</a>, open the chest and bring back the item.</li>
              <li>Reward: 5000gp, 40.000 xp, +200 karma</li>
              <li>Award: <i>Retrieved Lord Kilburn's Shield</i> (the lord gives his vote on the High Council at <a
                href="#fh">Free
                Haven</a>)
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_13">Find the Hourglass of Time.
            <ul>
              <li>Mission: Lord Albert Newton in <a href="#mi">Misty Islands</a> (#28), and <a href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#ns_gf">Gharik's Forge</a> at <a href="#ns">New Sorpigal</a>, and bring
                back
                the item.
              </li>
              <li>Reward: 0 gp, 50.000 xp, +200 karma</li>
              <li>Award: <i>Retrieved Hourglass of Time</i> (the lord gives his vote on the High Council at <a
                href="#fh">Free
                Haven</a>)
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_14">Drink from the Fountain of Magic.
            <ul>
              <li>Mission: Lord Albert Newton in <a href="#mi">Misty Islands</a></li>
              <li>Solution: Go to the middle south of <a href="#bb">Bootleg Bay</a>, drink from fountain and return.
              </li>
              <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Received promotion to (honorary) Wizard</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_15">Storm the Silver Helm Outpost.
            <ul>
              <li>Mission: Charles D'Sorpigal in <a href="#mi">Misty Islands</a> (#12)</li>
              <li>Solution: Go into the <a href="#mi_sh">Silver Helm Outpost</a> at <a href="#mi">Misty Islands</a> and
                bring
                back the Enemies List Scroll.
              </li>
              <li>Reward: 3000gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Saved the Mayor of Mist</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_16">Destroy the crystal in the Temple of the Fist.
            <ul>
              <li>Mission: Winston Schezar in <a href="#bb">Bootleg Bay</a> (#9)</li>
              <li>Solution: Go into the <a href="#bb_tf">Temple of the Fist</a> at <a href="#bb">Bootleg Bay</a>,
                destroy
                the
                crystal and return.
              </li>
              <li>Reward: 3000gp, 10.000 xp, +50 karma</li>
              <li>Award: <i>Destroyed the wicked crystal</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_17">Destroy the Devil's Outpost.
            <ul>
              <li>Mission: Lord Osric Temper in <a href="#fh">Free Haven</a> (#72), and <a href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#ks_do">Devil's Outpost</a> at <a href="#ks">Kriegspire</a> and bring
                back
                Devil Plans Scroll.
              </li>
              <li>Reward: the lord give his vote on the High Council at <a href="#fh">Free Haven</a>, 40.000 xp, +200
                karma
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_18">Get Knight's Nomination.
            <ul>
              <li>Mission: Lord Osric Temper in <a href="#fh">Free Haven</a> (#72)</li>
              <li>Solution: Go into the Inn of <a href="#fh">Free Haven</a>, talk to Chadwick Blackpool and return.</li>
              <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Received promotion to (honorary) Cavalier</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_19">Find the lost artifact.
            <ul>
              <li>Mission: Zoltan Phelps in <a href="#fh">Free Haven</a> (#25)</li>
              <li>Solution: Go into <a href="#fh_dk">Dragoons' Keep</a> at <a href="#fh">Free Haven</a> and bring
                back <i>Mordred</i>.
              </li>
              <li>Reward: 30000gp, 10.000 xp, +100 karma</li>
              <li>Award: <i>Found Zoltan's artifact</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_20">Rescue Sherell.
            <ul>
              <li>Mission: Carlo Tormini in <a href="#fh">Free Haven</a> (#39)</li>
              <li>Solution: Go into <a href="#bb_tt">Temple of Tsantsa</a> at <a href="#bb">Bootleg Bay</a> and bring
                back
                her.
              </li>
              <li>Reward: 1500gp, 10.000 xp, 0 karma</li>
              <li>Award: <i>Rescued Sherell</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_21">Retrieve Ethric's Skull.
            <ul>
              <li>Mission: Gabriel Cartman in <a href="#fh">Free Haven</a> (#57)</li>
              <li>Solution: Go into <a href="#fh_te">Tomb of Ethric the Mad</a> at <a href="#fh">Free Haven</a> and
                bring
                back
                the item.
              </li>
              <li>Reward: 7500gp, 15.000 xp, 0 karma</li>
              <li>Award: <i>Retrieved Ethric's Skull</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_22">Defeat the Warlord.
            <ul>
              <li>Mission: Lord Osric Temper in <a href="#fh">Free Haven</a> (#72)</li>
              <li>Solution: Go into the <a href="#sc_wf">Warlord's Fortress</a> at <a href="#sc">Silver Cove</a> and
                bring
                back Discharge Paper Scroll.
              </li>
              <li>Reward: 0 gp, 40.000 xp, +100 karma</li>
              <li>Award: <i>Received promotion to (honorary) Champion</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_23">Retrieve the Crystal of Terrax.
            <ul>
              <li>Mission: Lord Albert Newton in <a href="#mi">Misty Islands</a> (#28)</li>
              <li>Solution: Go into the <a href="#ci_ce">Corlagon's Estate</a> at <a href="#ci">Castle Ironfist</a> and
                bring
                back the item.
              </li>
              <li>Reward: 0 gp, 30.000 xp, +100 karma</li>
              <li>Award: <i>Received promotion to (honorary) Archmage</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_24">Slay Longfang Witherhide.
            <ul>
              <li>Mission: Regent Wilbur Humphrey in <a href="#ci">Castle Ironfist</a> (#24)</li>
              <li>Solution: Go into the <a href="#md_dl">Dragon's Lair</a> at <a href="#md">Mire of Damned</a> and bring
                back
                the Dragon Claw to him.
              </li>
              <li>Reward: 0 gp, 30.000 xp, +100 karma</li>
              <li>Award: <i>Received promotion to (honorary) Hero</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_25">Destroy the Book of Liches.
            <ul>
              <li>Mission: Terry Ross in <a href="#md">Mire of the Damned</a> (#11)</li>
              <li>Solution: Go into the <a href="#md_cd">Castle Darkmoor</a> at <a href="#md">Mire of the Damned</a>,
                touch
                the book and return.
              </li>
              <li>Reward: 5000gp, 50.000 xp, +100 karma</li>
              <li>Award: <i>Destroyed the Book of Liches</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_26">Kill Snergle.
            <ul>
              <li>Mission: Avinril Smythers in Inn at <a href="#md">the Mire of the Damned</a> (#18)</li>
              <li>Solution: Go into the <a href="#md_sm">Snergle's Iron Mines</a> at <a href="#md">the Mire of the
                Damned</a>
                for Key to Snergle's Chambers, then go into the <a href="#ci_sc">Snergle's Caverns</a> at <a href="#ci">Castle
                  Ironfist</a> and bring back his axe.
              </li>
              <li>Reward: 0 gp, 20.000 xp, +100 karma, can learn Master Axe</li>
              <li>Award: <i>Killed Snergle</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_27">Repair the temple.
            <ul>
              <li>Mission: Lord Anthony Stone in <a href="#fz">Frozen Highlands</a></li>
              <li>Solution: Hire a Stonecutter and a Carpenter, bring them to the temple in <a href="#fh">Free
                Haven</a> to
                repair and return.
              </li>
              <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Received promotion to (honorary) Priest</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_28">Capture the Prince of Thieves.
            <ul>
              <li>Mission: Lord Anthony Stone in <a href="#fz">Frozen Highlands</a> (#2), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#fh_se">Free Haven Sewers</a> at <a href="#fh">Free Haven</a> and bring
                him
                back (before you enter the Sewers, be sure you have completed the <a href="#ci_dc">Dragoons'
                  Caverns</a> in
                the <a href="#ci">Castle Ironfist</a>, and then <a href="#ci_sg">Shadow Guild Hideout</a> in the <a
                  href="#ci">Castle Ironfist</a>, and then <a href="#fz_sg">Shadow Guild</a> in the <a href="#fz">Frozen
                  Highlands</a>, because he has fled from them).
              </li>
              <li>Reward: 10.000gp, 30.000 xp, +200 karma</li>
              <li>Award: <i>Captured the Prince of Thieves</i> (the lord gives his vote on the High Council at <a
                href="#fh">Free
                Haven</a>)
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_29">Fix the prices of all stables.
            <ul>
              <li>Mission: Lady Loretta Fleise in <a href="#sc">Silver Cove</a> (#32), and <a href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the 9 stables are at: <a href="#sc">Silver Cove</a>, <a href="#md">Mire of the
                Damned</a>,
                <a href="#ks">Kriegspire</a>, <a href="#bs">Blackshire</a>, <a href="#ci">Castle Ironfist</a>, <a
                  href="#ns">New
                  Sorpigal</a>, <a href="#fz">Frozen Highlands</a>, two in <a href="#fh">Free Haven</a>, talk to the
                owners,
                and return.
              </li>
              <li>Reward: 5000gp, 25.000 xp, -200 karma (BUG!)</li>
              <li>Award: <i>Fixed the stable prices</i> (the lady gives her vote on the High Council at <a href="#fh">Free
                Haven</a>)
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_30">Visit the Altar of the Sun.
            <ul>
              <li>Mission: Lady Loretta Fleise in <a href="#sc">Silver Cove</a> (#32)</li>
              <li>Solution: Go to the Circle of Stones at <a href="#sc">Silver Cove</a> on an equinox or solstice (March
                20<sup>th</sup>, June 21<sup>st</sup>, September 23<sup>rd</sup>, and December 21<sup>st</sup>).
              </li>
              <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Received promotion to (honorary) Great Druid</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_31">Deface the altar.
            <ul>
              <li>Mission: Eleanor Vanderbilt in <a href="#sc">Silver Cove</a> (#31)</li>
              <li>Solution: Go into the <a href="#sc_mo">Monolith</a> west of <a href="#sc">Silver Cove</a>, touch the
                altar
                and return.
              </li>
              <li>Reward: 3000gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Saved the Monolith</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_32">Visit the Altar of the Moon.
            <ul>
              <li>Mission: Lady Loretta Fleise in <a href="#sc">Silver Cove</a> (#32)</li>
              <li>Solution: Go into the <a href="#fh_tm">Temple of the Moon</a> at <a href="#fh">Free Haven</a> and
                touch
                the
                altar at midnight.
              </li>
              <li>Reward: 0 gp, 40.000 xp, +100 karma</li>
              <li>Award: <i>Received promotion to (honorary) Arch Druid</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_33">Take the Sacred Chalice.
            <ul>
              <li>Mission: Lord Anthony Stone in <a href="#fz">Frozen Highlands</a> (#2)</li>
              <li>Solution: Go into the <a href="#bb_ts">Temple of the Sun</a> at <a href="#bb">Bootleg Bay</a>, find
                the
                chalice, bring it back to the temple in <a href="#fh">Free Haven</a> and return.
              </li>
              <li>Reward: 0 gp, 30.000 xp, +100 karma</li>
              <li>Award: <i>Received promotion to (honorary) High Priest</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_34">End winter.
            <ul>
              <li>Mission: Lord Eric von Stromgard in <a href="#fz">Frozen Highlands</a> (#12), and <a
                href="#tr">Seer</a> in
                <a href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go to Hermit's Hut in <a href="#ks">Kriegspire</a>, talk to Hermit and return.</li>
              <li>Reward: 0 gp, 50.000 xp, +200 karma</li>
              <li>Award: <i>Ended winter</i> (the lord gives his vote on the High Council at <a href="#fh">Free
                Haven</a>)
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_35">Retrieve the Key to the Dragon Towers.
            <ul>
              <li>Mission: Lord Eric von Stromgard in <a href="#fz">Frozen Highlands</a> (#12)</li>
              <li>Solution: Go into <a href="#fz_ik">Icewind Keep</a> at <a href="#fz">Frozen Highlands</a>, and bring
                back
                the item.
              </li>
              <li>Reward: 0 gp, 15.000 xp, +50 karma</li>
              <li>Award: <i>Received promotion to (honorary) Battle Mage</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_36">Reset all of the Dragon Towers.
            <ul>
              <li>Mission: Lord Eric von Stromgard in <a href="#fz">Frozen Highlands</a> (#12)</li>
              <li>Solution: Click on the lock in 6 cities: <a href="#fz">Frozen Highlands</a>, <a href="#sc">Silver
                Cove</a>,
                <a href="#fh">Free Haven</a>, <a href="#mi">Misty Islands</a>, <a href="#ns">New Sorpigal</a>, <a
                  href="#bs">Blackshire</a>.
                You can can reach theese cities with Town Portal spell easily (at master rank of Water Magic). Be sure
                that
                you have the Key to the Dragon Towers.
              </li>
              <li>Reward: 0 gp, 40.000 xp, +100 karma (and the towers do not fire you at last)</li>
              <li>Award: <i>Received promotion to (honorary) Warrior Mage</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_37">Rescue Emmanuel.
            <ul>
              <li>Mission: Joanne Cravitz in <a href="#bs">Blackshire</a> (#11)</li>
              <li>Solution: Go into the <a href="#bs_ts">Temple of the Snake</a> at <a href="#bs">Blackshire</a> and
                bring
                back him from cage.
              </li>
              <li>Reward: 500gp, 25.000 xp, 0 karma</li>
              <li>Award: <i>Rescued Emmanuel</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_38">Destroy the werewolf's altar.
            <ul>
              <li>Mission: Maria Trepan in <a href="#bs">Blackshire</a> (#17)</li>
              <li>Solution: Go into the <a href="#bs_lw">Lair of the Wolf</a> at <a href="#bs">Blackshire</a>, talk to
                Ghost
                of Baltazar, find the Peral of Purity and touch the altar.
              </li>
              <li>Reward: 4000gp, 20.000 xp, +100 karma</li>
              <li>Award: <i>Broke the Blackshire Curse</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_39">Place the statuettes.
            <ul>
              <li>Mission: Twillen in <a href="#bs">Blackshire</a> (#20)</li>
              <li>Solution: Open the chest at house of Twillen and get the five statuettes. Go to the <a href="#bb">Bootleg
                Bay</a>, <a href="#md">Mire of the Damned</a>, <a href="#ks">Kriegspire</a>, <a
                href="#ds">Dragonsands</a>, <a
                href="#sw">Sweet Water</a>, touch the pedestals and return.
              </li>
              <li>Reward: 0gp, 75.000 xp, 0 karma, and the chest with random items</li>
              <li>Award: <i>Placed Twillen's statuettes</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_40">Find the Pearl of Putrescence.
            <ul>
              <li>Mission: Ghost of Balthazar in the <a href="#bs_lw">Lair of the Wolf</a> at <a
                href="#bs">Blackshire</a>
                (#28)
              </li>
              <li>Solution: Kill the Werewolf Leader and bring back the item.</li>
              <li>Reward: 0gp, 5.000 xp, 0 karma</li>
              <li>Award: <i>Killed the Werewolf Leader</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_41">Retrieve the Jewelled Egg.
            <ul>
              <li>Mission: Emil Lime in <a href="#ks">Kriegspire</a> (#9)</li>
              <li>Solution: Go into the <a href="#ks_ck">Castle Kriegspire</a> at <a href="#ks">Kriegspire</a> and bring
                back
                the item.
              </li>
              <li>Reward: 5000gp, 50.000 xp, +100 karma</li>
              <li>Award: <i>Retrieved Emil's Egg</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_42">Find a cure for Slicker Silvertongue.
            <ul>
              <li>Mission: Regent Wilbur Humphrey in <a href="#ci">Castle Ironfist</a> (#24), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#ks_st">Superior Temple of Baa</a> at <a href="#ks">Kriegspire</a> and
                bring
                back the Letter from Zenofex Scroll.
              </li>
              <li>Reward: 0gp, 0 xp, 0 karma, but <a href="#q_43">quest 43</a></li>
              <li>Award: -</li>
            </ul>
            <br/>
          </li>
          <li id="q_43">Bring the letter detailing Silvertongue's treason to the High Council.
            <ul>
              <li>Mission: Regent Wilbur Humphrey in <a href="#ci">Castle Ironfist</a> (#24)</li>
              <li>Solution: Go into the High Council at <a href="#fh">Free Haven</a>, talk to Silvertongue and return.
              </li>
              <li>Reward: 0gp, 0 xp, +800 karma. Silvertongue leaves the council, possible to visit the <a
                href="#fh_or">Oracle</a>
                if you have the support of the other five lords. Regent Wilburn Humphrey will let you use the Royal
                Yacht. <a
                  href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32) gives you this advice long time: you
                must
                visit the Oracle.
              </li>
              <li>Award: <i>Exposed the Traitor on the High Council</i>, and <i>Allowed to use the Royal Yacht</i>, but
                not
                shown (BUG!)
              </li>
            </ul>
            <br/>
          </li>
          <li id="q_44">Find Memory Crystal Alpha.
            <ul>
              <li>Mission: <a href="#fh_or">Oracle</a> at <a href="#fh">Free Haven</a> (#60), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#hi_st">Supreme Temple of Baa</a> at <a href="#hi">Hermit's Isle</a>,
                bring
                back the item and restore it.
              </li>
              <li>Reward: 0gp, 100.000 xp, 0 karma</li>
              <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
            </ul>
            <br/>
          </li>
          <li id="q_45">Find Memory Crystal Beta.
            <ul>
              <li>Mission: <a href="#fh_or">Oracle</a> at <a href="#fh">Free Haven</a> (#60), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#iw_ca">Castle Alamos</a> at <a href="#iw">Eel Infested Waters</a>,
                bring
                back the item and restore it.
              </li>
              <li>Reward: 0gp, 100.000 xp, 0 karma</li>
              <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
            </ul>
            <br/>
          </li>
          <li id="q_46">Find Memory Crystal Delta.
            <ul>
              <li>Mission: <a href="#fh_or">Oracle</a> at <a href="#fh">Free Haven</a> (#60), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#md_cd">Castle Darkmoor</a> at <a href="#md">Mire of the Damned</a>,
                bring
                back the item and restore it.
              </li>
              <li>Reward: 0gp, 100.000 xp, 0 karma</li>
              <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
            </ul>
            <br/>
          </li>
          <li id="q_47">Find Memory Crystal Epsilon.
            <ul>
              <li>Mission: <a href="#fh_or">Oracle</a> at <a href="#fh">Free Haven</a> (#60), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#ks_ck">Castle Kriegspire</a> at <a href="#ks">Kriegspire</a>, bring
                back
                the
                item and restore it.
              </li>
              <li>Reward: 0gp, 100.000 xp, 0 karma</li>
              <li>Award: <i>Awakened the Oracle</i>, if quests 44, 45, 46, 47 are completed</li>
            </ul>
            <br/>
          </li>
          <li id="q_48">Unward the doors.
            <ul>
              <li>Mission: Lord of Fire in the <a href="#bb_hf">Hall of the Fire Lord</a> at <a href="#bb">Bootleg
                Bay</a>
                (#2)
              </li>
              <li>Solution: Touch 2 doors (need 2 ambers) and return to the lord.</li>
              <li>Reward: 0gp, 10.000 xp, 0 karma</li>
              <li>Award: <i>Aided the Lord of Fire</i></li>
            </ul>
            <br/>
          </li>
          <li id="q_49">Retrieve the Control Cube.
            <ul>
              <li>Mission: <a href="#fh_or">Oracle</a> at <a href="#fh">Free Haven</a> (#60), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the <a href="#ds_tv">Tomb of VARN</a> at <a href="#ds">Dragonsand</a> and bring back
                the
                item.
              </li>
              <li>Reward: 0gp, 500.000 xp, 0 karma</li>
              <li>Award: <i>Gained Access to the <a href="#fh_cc">Control Center</a></i></li>
            </ul>
            <br/>
          </li>
          <li id="q_50">Obtain Ancient Magic from Archibald.
            <ul>
              <li>Mission: <a href="#fh_or">Oracle</a> at <a href="#fh">Free Haven</a> (#60), and <a
                href="#tr">Seer</a> in <a
                href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Go into the Royal Library in the to of Castle Ironfist, and talk to Archibald, but be sure
                you
                have completed the <a href="#q_51">quest 51</a>.
              </li>
              <li>Reward: 0gp, 50.000 xp, -928 karma, <i>Ritual of the Void</i></li>
              <li>Award: <i>Freed Archibald</i>, but not shown (BUG!)</li>
            </ul>
            <br/>
          </li>
          <li id="q_51">Find the Third Eye.
            <ul>
              <li>Mission: Prince Nicolai Ironfist at <a href="#ci">Castle Ironfist</a> (#24), and <a
                href="#tr">Seer</a> in
                <a href="#ci">Castle Ironfist</a> (#32) gives you this advice too
              </li>
              <li>Solution: Touch the well near Castle Ironfist and bring back the item.</li>
              <li>Reward: 0gp, 0 xp, 0 karma, Tanir's Bell (which can be used in <a href="#q_50">quest 50</a>)</li>
              <li>Award: -</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="sq">
        <h3>Subquests (not shown in your quest list)</h3>
        <ol>
          <li id="sq_1">Bounty hunting.
            <ul>
              <li>Mission: Boss of Town Halls: Janice in <a href="#ns">New Sorpigal</a> (#21), Earnest in <a href="#mi">Misty
                Islands</a> (#12), Jake in <a href="#sc">Silver Cove</a> (#24).
              </li>
              <li>Solution: Kill at least 1 noticed monster and return. Hunting list resets every month, but can run 3
                hunting
                at the same time, because there are 3 Town Hall in Enroth.
              </li>
              <li>Reward: various gp, 0 xp, +(gp/100) karma</li>
              <li>Award: <i>Collected X bounties</i></li>
            </ul>
            <br/>
          </li>
          <li id="sq_2">Show Shadow Guild letter.
            <ul>
              <li>Mission: Frank Fairchild in <a href="#ns">New Sorpigal</a> (#21)</li>
              <li>Solution: Go into the <a href="#ci_dc">Dragoons' Caverns</a> at <a href="#ci">Castle Ironfist</a> and
                bring
                back the item.
              </li>
              <li>Reward: 5000gp, 5.000 xp, +50 karma</li>
              <li>Award: -</li>
            </ul>
            <br/>
          </li>
          <li id="sq_3">Bring Pearl of Purity to Wilbur Humphrey
            <ul>
              <li>Mission: Ghost of Baltazar in <a href="#bs_lw">Lair of the Wolf</a> at <a
                href="#bs">Blackshire</a> (#28).
              </li>
              <li>Solution: Go into the Lair of the Wolf, talk to Ghost of Baltazar, finish the <a href="#q_38">quest
                38</a>
                and bring the item to Wilbur Humphrey.
              </li>
              <li>Reward: 0gp, 10.000 xp, 0 karma</li>
              <li>Award: -</li>
            </ul>
            <br/>
          </li>
          <li id="sq_4">Ankh
            <ul>
              <li>Mission: Ghost of John Silver in <a href="#sc_sh">Silver Helm Stronghold</a> at <a href="#sc">Silver
                Cove</a> (#45)
              </li>
              <li>Solution: Go into the stronghold, kill the warlock (Gerrard Blacknames), get the ankh, talk to Ghost
                of
                John
                Silver, talk to Lady Loretta Fleise at <a href="#sc">Silver Cove</a>, and bring the item to Anthony
                Stone at
                <a href="#fz">Frozen Highlands</a>.
              </li>
              <li>Reward: 5000gp, 10.000 xp, 0 karma</li>
              <li>Award: -</li>
            </ul>
            <br/>
          </li>
          <li id="sq_5">Let you be a Baa follower.
            <ul>
              <li>Mission: Almighty Head of Baa in <a href="#ks_st">Superior Temple of Baa</a> at <a
                href="#ks">Kriegspire</a>
                (#13)
              </li>
              <li>Solution: Go into the temple, press the Baa Head 1,2,3,4, walk through the spiral corridor, and
                return.
              </li>
              <li>Reward: 0gp, 50.000 xp, -976 karma</li>
              <li>Award: -</li>
            </ul>
            <br/>
          </li>
          <li id="sq_6">Pray at Baa Altars.
            <ul>
              <li>Mission: Altars of Supreme Temple in <a href="#hi_st">Supreme Temple of Baa</a> at <a href="#hi">Hermit's
                Isle</a> (#1)
              </li>
              <li>Solution: Go into the temple, press the Baa Altars of Pain, of Cold, of Fire in one room Head and
                touch
                the
                other 4 altar.
              </li>
              <li>Reward: 0gp, 0 xp, 0 karma, +10 Elemental Resistance for one character permanently</li>
              <li>Award: -</li>
            </ul>
            <br/>
          </li>
          <li id="sq_7">Read Obelisks.
            <ul>
              <li>Mission: -</li>
              <li>Solution: There are 15 maps in Enroth, and every map has 1 obelisk. Go to every 15 place, and touch
                the
                obelisks. The messages of obelisks are:
                <table className="no-border w-600">
                  <tbody>
                  <tr>
                    <td className="w-200">
                      <ol>
                        <li><code>Itotecthothesaip</code></li>
                        <li><code>nhrh_aherheatvdi</code></li>
                        <li><code>_etecpe__ersoede</code></li>
                        <li><code>t_haat_lt__en_lc</code></li>
                        <li><code>hd_scawehSfdewee</code></li>
                        <li><code>erbthieaeuu_,o'd</code></li>
                        <li><code>_ay,enis_nn_ans_</code></li>
                        <li><code>lg____gtS_cln;__</code></li>
                        <li><code>aoflo'h.hbtid_p_</code></li>
                        <li><code>nnaifnt_ieif_tu_</code></li>
                        <li><code>d_re_e_Hpfotyhz_</code></li>
                        <li><code>_t_staoi_on_oiz_</code></li>
                        <li><code>oon_htfdorstusl_</code></li>
                        <li><code>f_oteh__fe_h__e_</code></li>
                        <li><code>_nrh__tf__cehr__</code></li>
                      </ol>
                    </td>
                    <td className="w-400">
                      Let us read vertically down the column:
                      <br/><br/><i>In the land of the dragon to north by far northeast,
                        <br/>lies the cache of the captain 'neath the weight of the least.
                          <br/>Hid for the Ship of the Sun before her functions ceased,
                            <br/>lift the stone and you have won; this riddle's puzzle pieced.</i>
                    </td>
                  </tr>
                  </tbody>
                </table>
                Go to the Rock at <a href="#ds">Dragonsands</a> and touch it. The Rock is a chest.
              </li>
              <li>Reward: 250.000gp, 0 xp, 0 karma, Dark Containment book, Divine Intervention book, <i>Morgan</i>,
                <i>Igraine</i>, <i>Guinevere</i>.
                <br/>Each time the chest is opened gives you another 250,000gp. (BUG!)
              </li>
              <li>Award: <i>Solved the Obelisk Puzzle</i>, but not shown (BUG!)</li>
            </ul>
            <br/>
          </li>
          <li id="sq_8">Be a champion.
            <ul>
              <li>Mission: Arena Master in the Arena (reachable by coach travel at Sunday from <a href="#ci">Castle
                Ironfist</a> (#5))
              </li>
              <li>Solution: Talk to Arena Master, choose the level of combat (Page, Squire, Knight, Lord), beat the
                monsters
                and return to him for reward. Be sure that killed all monsters and all caharacter survived the combat.
              </li>
              <li>Reward: various gp, 0 xp, 0 karma</li>
              <li>Award: <i>X Page/Squire/Knight/Lord Arena victories</i></li>
            </ul>
            <br/>
          </li>
          <li id="sq_9">Be a goober.
            <ul>
              <li>Mission: unknown</li>
              <li>Solution: Go into the <a href="#fh_cc">Control Center</a> at <a href="#fh">Free Haven</a> and find the
                Proclamation Scroll.(#60)
              </li>
              <li>Reward: various gp, 0 xp, 0 karma</li>
              <li>Award: <i>Super-Goober</i></li>
            </ul>
            <br/>
          </li>
          <li id="sq_10">Save Enroth.
            <ul>
              <li>Mission: <a href="#tr">Seer</a> in <a href="#ci">Castle Ironfist</a> (#32) gives you this advice</li>
              <li>Solution: Go into the <a href="#sw_hi">The Hive</a> at <a href="#sw">Sweet Water</a> (#4), kill the
                Reactor
                and the Demon Queen. Be sure that you have the Ritual of the Void Scroll from Archibald Ironfist.
              </li>
              <li>Reward: 0 gp, 0 xp, 0 karma, but win the whole game</li>
              <li>Award: <i>Destroyed the Hive and saved Enroth</i></li>
            </ul>
            <br/>
          </li>
        </ol>
      </section>

      <section id="ts">
        <h3>Skills</h3>
        <p>The key for the classes column below:
          <br/><code>- </code>= Class cannot learn
          <br/><code>N </code>= Class can reach normal level
          <br/><code>E </code>= Class can reach expert level
          <br/><code>M </code>= Class can reach master level
          <br/><code>G </code>= Class can reach grandmaster level
          <br/>In MM6 every learnable skill for class can reach at master level, and there is no grandmaster
          rank,
          against MM7
          and MM8.
          <br/>To become an Expert in the skill, need to have at least rank 4 in that skill.
          <br/>To become a Master in the skill, must be an Expert, plus meet additional requirements
          specific
          to each
          skill.</p><br/><br/>
          <table>
            <colgroup>
              <col className="left"/>
              <col span="6" className="center"/>
              <col className="left"/>
              <col className="center"/>
              <col className="right"/>
              <col span="2" className="center"/>
              <col className="right"/>
            </colgroup>
            <tbody>
            <tr>
              <th rowSpan="2">Weapon Skills</th>
              <th colSpan="6">Classes</th>
              <th rowSpan="2" className="center">Guild</th>
              <th rowSpan="2">Expert Trainer<br/>(Location)</th>
              <th rowSpan="2" className="center">Cost</th>
              <th rowSpan="2">Master Trainer<br/>(Location)</th>
              <th rowSpan="2">Requirement</th>
              <th rowSpan="2" className="center">Cost</th>
            </tr>
            <tr>
              <th>Kn</th>
              <th>Pa</th>
              <th>Ar</th>
              <th>Cl</th>
              <th>So</th>
              <th>Dr</th>
            </tr>
            <tr>
              <td rowSpan="2">Axe</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2"><a href="#gui">Blade's End</a></td>
              <td>Stephen Biggs<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Avinril Smythers<br/>(<a href="#md">Mire of the Damned</a>)</td>
              <td rowSpan="2"><a href="#q_26">Quest 26</a></td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td>Connie Lettering<br/>(<a href="#md">Mire of the Damned</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Blaster</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2"><a href="#fh_cc">Control Center</a><br/>(<a href="#fh">Free Haven</a>)
              </td>
              <td>Igor<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Rexella<br/>(<a href="#pv">Paradise Valley</a>)</td>
              <td rowSpan="2">Possess<br/>Blaster</td>
              <td rowSpan="2">5000</td>
            </tr>
            <tr>
              <td>Pat Skylark<br/>(<a href="#iw">Eel Infested Waters</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Bow</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Berserker's Fury</a></td>
              <td>Helen Teal<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Desmond Weller<br/>(<a href="#ks">Kriegspire</a>)</td>
              <td rowSpan="2">Rank 8<br/>Battle Mage</td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td><a href="#gui">Duelist's Edge</a></td>
              <td>Jed Morrison<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Dagger</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td><a href="#gui">Buccaneer's Lair</a></td>
              <td>Terrance Smith<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Jules Miles<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td rowSpan="2">Rank 8<br/>Speed 40</td>
              <td rowSpan="2">5000</td>
            </tr>
            <tr>
              <td><a href="#gui">Protection Services</a></td>
              <td>Logan Dasher<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Mace</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2"><a href="#gui">Duelist's Edge</a></td>
              <td>Jack Crow<br/>(<a href="#md">Mire of the Damned</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Errol Ostermann<br/>(<a href="#bs">Blackshire</a>)</td>
              <td rowSpan="2">Rank 8<br/>Might 40</td>
              <td rowSpan="2">5000</td>
            </tr>
            <tr>
              <td>Dickson Parks<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Spear</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2"><a href="#gui">Blade's End</a></td>
              <td>Gonzalo Ramirez<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Burton Rutherford<br/>(<a href="#md">Mire of the Damned</a>)</td>
              <td rowSpan="2">Rank 8<br/>Cavalier</td>
              <td rowSpan="2">5000</td>
            </tr>
            <tr>
              <td>Sigriv<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Staff</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2"><a href="#gui">Blade's End</a></td>
              <td>Dorf<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Jasper Rice<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td rowSpan="2">Rank 8</td>
              <td rowSpan="2">5000</td>
            </tr>
            <tr>
              <td>Calvin Black<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Sword</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2"><a href="#gui">Blade's End</a></td>
              <td>Aaron Strongmun<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Guy Hampton<br/>(<a href="#bs">Blackshire</a>)</td>
              <td rowSpan="2">Rank 8<br/>Cavalier</td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td>Michael Ogilvy<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>2000</td>
            </tr>
            </tbody>
          </table>
          <br/>
          <table>
            <colgroup>
              <col className="left"/>
              <col span="6" className="center"/>
              <col className="left"/>
              <col className="center"/>
              <col className="right"/>
              <col span="2" className="center"/>
              <col className="right"/>
            </colgroup>
            <tbody>
            <tr>
              <th rowSpan="2">Armor Skills</th>
              <th colSpan="6">Classes</th>
              <th rowSpan="2" className="center">Guild</th>
              <th rowSpan="2">Expert Trainer<br/>(Location)</th>
              <th rowSpan="2" className="center">Cost</th>
              <th rowSpan="2">Master Trainer<br/>(Location)</th>
              <th rowSpan="2">Requirement</th>
              <th rowSpan="2" className="center">Cost
              </th>
            </tr>
            <tr>
              <th>Kn</th>
              <th>Pa</th>
              <th>Ar</th>
              <th>Cl</th>
              <th>So</th>
              <th>Dr</th>
            </tr>
            <tr>
              <td rowSpan="4">Leather Armor</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td><a href="#gui">Buccaneer's Lair</a></td>
              <td rowSpan="2">Newt Headrow<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td rowSpan="2">1000</td>
              <td rowSpan="4">Arlen Sailor<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td rowSpan="4">Rank 10</td>
              <td rowSpan="4">3000</td>
            </tr>
            <tr>
              <td><a href="#gui">Smuggler's Guid</a></td>
            </tr>
            <tr>
              <td><a href="#gui">Protection Services</a></td>
              <td rowSpan="2">Arthur O'Leery<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td rowSpan="2">1000</td>
            </tr>
            <tr>
              <td><a href="#gui">Blade's End</a></td>
            </tr>
            <tr>
              <td rowSpan="2">Chain Armor</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td><a href="#gui">Berserker's Fury</a></td>
              <td>Rich Hamburg<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>1000</td>
              <td rowSpan="2">David Feather<br/>(<a href="#md">Mire of the Damned</a>)</td>
              <td rowSpan="2">Rank 10<br/>Crusader</td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td><a href="#gui">Duelist's Edge</a></td>
              <td>Preston Harper<br/>(<a href="#bb">Bootleg Bay</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Plate Armor</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2"><a href="#gui">Berserker's Fury</a></td>
              <td>Benito Tellman<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Forest Suthers<br/>(<a href="#fh">Free Haven</a>)</td>
              <td rowSpan="2">Hero</td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td>Woodrow Albright<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Shield</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td><a href="#gui">Berserker's Fury</a></td>
              <td>Edgar Carpenter<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Bronwyn Meck<br/>(<a href="#bs">Blackshire</a>)</td>
              <td rowSpan="2">Rank 10</td>
              <td rowSpan="2">5000</td>
            </tr>
            <tr>
              <td><a href="#gui">Duelist's Edge</a></td>
              <td>Takao<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>2000</td>
            </tr>
            </tbody>
          </table>
          <br/>
          <table>
            <colgroup>
              <col className="left"/>
              <col span="6" className="center"/>
              <col className="left"/>
              <col className="center"/>
              <col className="right"/>
              <col span="2" className="center"/>
              <col className="right"/>
            </colgroup>
            <tbody>
            <tr>
              <th rowSpan="2">Magic Skills</th>
              <th colSpan="6">Classes</th>
              <th rowSpan="2" className="center">Guild</th>
              <th rowSpan="2">Expert Trainer<br/>(Location)</th>
              <th rowSpan="2" className="center">Cost</th>
              <th rowSpan="2">Master Trainer<br/>(Location)</th>
              <th rowSpan="2">Requirement</th>
              <th rowSpan="2" className="center">Cost
              </th>
            </tr>
            <tr>
              <th>Kn</th>
              <th>Pa</th>
              <th>Ar</th>
              <th>Cl</th>
              <th>So</th>
              <th>Dr</th>
            </tr>
            <tr>
              <td rowSpan="2">Air Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Elements Guild</a></td>
              <td>Cheryl Duncan<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Caao Salem<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td rowSpan="2">Archmage</td>
              <td rowSpan="2">4000</td>
            </tr>
            <tr>
              <td><a href="#gui">Air Guild</a></td>
              <td>Zodahn Delphi<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Earth Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Elements Guild</a></td>
              <td>Taro<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Revee Botania<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td rowSpan="2">Rank 12</td>
              <td rowSpan="2">4000</td>
            </tr>
            <tr>
              <td><a href="#gui">Earth Guild</a></td>
              <td>Li Tizare<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Fire Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Elements Guild</a></td>
              <td>Isao Magistrus<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Jezebel<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td rowSpan="2">Rank 12</td>
              <td rowSpan="2">4000</td>
            </tr>
            <tr>
              <td><a href="#gui">Fire Guild</a></td>
              <td>Jack Van Imp<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Water Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Elements Guild</a></td>
              <td>Douglas Hill<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Harper Collins<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td rowSpan="2">Rank 12</td>
              <td rowSpan="2">4000</td>
            </tr>
            <tr>
              <td><a href="#gui">Water Guild</a></td>
              <td>Hitomi Mirumoto<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Body Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Self Guild</a></td>
              <td>Abdulai Mahgreb<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Gilbert Hammer<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td rowSpan="2">Rank 12</td>
              <td rowSpan="2">4000</td>
            </tr>
            <tr>
              <td><a href="#gui">Body Guild</a></td>
              <td>Tim O'Hoolihan<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Mind Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Self Guild</a></td>
              <td>Virgil Holiday<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Thane Reper<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td rowSpan="2">Rank 12</td>
              <td rowSpan="2">4000</td>
            </tr>
            <tr>
              <td><a href="#gui">Mind Guild</a></td>
              <td>Mynasia<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Spirit Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Self Guild</a></td>
              <td>Enoch Highridge<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>1000</td>
              <td rowSpan="2">Bishop Iquisitorio<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td rowSpan="2">High Priest</td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td><a href="#gui">Spirit Guild</a></td>
              <td>Michele Blackshire<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>1000</td>
            </tr>
            <tr>
              <td rowSpan="2">Dark Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2"><a href="#gui">Dark Guild</a></td>
              <td>Morton Holovin<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Su Lang Manchu<br/>(<a href="#pv">Paradise Valley</a>)</td>
              <td rowSpan="2">Notorious<br/>Reputation</td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td>Ambrose Brusse<br/>(<a href="#bs">Blackshire</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="2">Light Magic</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">-</td>
              <td rowSpan="2"><a href="#gui">Light Guild</a></td>
              <td>Tina Sheltan<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Ki Lo Nee<br/>(<a href="#iw">Eel Infested Waters</a>)</td>
              <td rowSpan="2">Saintly<br/>Reputation</td>
              <td rowSpan="2">0</td>
            </tr>
            <tr>
              <td>Nicholas Roth<br/>(<a href="#ks">Kriegspire</a>)</td>
              <td>2000</td>
            </tr>
            </tbody>
          </table>
          <br/>
          <table>
            <colgroup>
              <col className="left"/>
              <col span="6" className="center"/>
              <col className="left"/>
              <col className="center"/>
              <col className="right"/>
              <col span="2" className="center"/>
              <col className="right"/>
            </colgroup>
            <tbody>
            <tr>
              <th rowSpan="2">Misc Skills</th>
              <th colSpan="6">Classes</th>
              <th rowSpan="2" className="center">Guild</th>
              <th rowSpan="2">Expert Trainer<br/>(Location)</th>
              <th rowSpan="2" className="center">Cost</th>
              <th rowSpan="2">Master Trainer<br/>(Location)</th>
              <th rowSpan="2">Requirement</th>
              <th rowSpan="2" className="center">Cost
              </th>
            </tr>
            <tr>
              <th>Kn</th>
              <th>Pa</th>
              <th>Ar</th>
              <th>Cl</th>
              <th>So</th>
              <th>Dr</th>
            </tr>
            <tr>
              <td rowSpan="2">Bodybuilding</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2"><a href="#gui">Duelist's Edge</a></td>
              <td>Erik Salzburg<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>500</td>
              <td rowSpan="2">Jason Traveller<br/>(<a href="#fh">Free Haven</a>)</td>
              <td rowSpan="2">Rank 7<br/>Endurance 30</td>
              <td rowSpan="2">2500</td>
            </tr>
            <tr>
              <td>Olaf Berring<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>500</td>
            </tr>
            <tr>
              <td rowSpan="3">Diplomacy</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td><a href="#gui">Buccaneer's Lair</a></td>
              <td>Walter Hargreaves<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>500</td>
              <td rowSpan="3">Jacques Kohl<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td rowSpan="3">Fame 200</td>
              <td rowSpan="3">2500</td>
            </tr>
            <tr>
              <td><a href="#gui">Smuggler's Guild</a></td>
              <td rowSpan="2">Sylvester Moor<br/>(<a href="#fh">Free Haven</a>)</td>
              <td rowSpan="2">500</td>
            </tr>
            <tr>
              <td><a href="#gui">Protection Services</a></td>
            </tr>
            <tr>
              <td rowSpan="3">Disarm Traps</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td><a href="#gui">Buccaneer's Lair</a></td>
              <td>Tyler Tailor<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td>500</td>
              <td rowSpan="3">Gabe Lester<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td rowSpan="3">Rank 7<br/>Accuracy 30</td>
              <td rowSpan="3">2500</td>
            </tr>
            <tr>
              <td><a href="#gui">Smugger's Guild</a></td>
              <td rowSpan="2">Ivan Magyar<br/>(<a href="#fh">Free Haven</a>)</td>
              <td rowSpan="2">500</td>
            </tr>
            <tr>
              <td><a href="#gui">Protection Services</a></td>
            </tr>
            <tr>
              <td rowSpan="3">Identify Item</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td><a href="#gui">Buccaneer's Lair</a></td>
              <td>Sheila Loompus<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>500</td>
              <td rowSpan="3">Hans Gifford<br/>(<a href="#fh">Free Haven</a>)</td>
              <td rowSpan="3">Rank 7<br/>Intellect 30</td>
              <td rowSpan="3">2500</td>
            </tr>
            <tr>
              <td><a href="#gui">Smuggler's Guild</a></td>
              <td rowSpan="2">Leon Lazaru<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td rowSpan="2">500</td>
            </tr>
            <tr>
              <td><a href="#gui">Protection Services</a></td>
            </tr>
            <tr>
              <td rowSpan="4">Learning</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td rowSpan="4">M</td>
              <td><a href="#gui">Air Guild</a></td>
              <td rowSpan="2">Donald Retzer<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td rowSpan="2">2000</td>
              <td rowSpan="4">John Tuck<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td rowSpan="4">Rank 7<br/>Intellect 30</td>
              <td rowSpan="4">5000</td>
            </tr>
            <tr>
              <td><a href="#gui">Earth Guild</a></td>
            </tr>
            <tr>
              <td><a href="#gui">Fire Guild</a></td>
              <td rowSpan="2">Elton Astrogate<br/>(<a href="#ci">Castle Ironfist</a>)</td>
              <td rowSpan="2">2000</td>
            </tr>
            <tr>
              <td><a href="#gui">Water Guild</a></td>
            </tr>
            <tr>
              <td rowSpan="3">Meditation</td>
              <td rowSpan="3">-</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td><a href="#gui">Body Guild</a></td>
              <td>Victor Hosen<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>500</td>
              <td rowSpan="3">Norio Ariganaka<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td rowSpan="3">Rank 7<br/>Personality 30</td>
              <td rowSpan="3">2500</td>
            </tr>
            <tr>
              <td><a href="#gui">Mind Guild</a></td>
              <td rowSpan="2">Clyde Dagget<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td rowSpan="2">500</td>
            </tr>
            <tr>
              <td><a href="#gui">Spirit Guild</a></td>
            </tr>
            <tr>
              <td rowSpan="2">Merchant</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Buccaneer's Lair</a></td>
              <td>Livia Farrel<br/>(<a href="#fh">Free Haven</a>)</td>
              <td>2000</td>
              <td rowSpan="2">Will Ottoman<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td rowSpan="2">Rank 7<br/>Personality 30</td>
              <td rowSpan="2">4000</td>
            </tr>
            <tr>
              <td><a href="#gui">Protection Services</a></td>
              <td>Casey Ludwig<br/>(<a href="#md">Mire of the Damned</a>)</td>
              <td>2000</td>
            </tr>
            <tr>
              <td rowSpan="3">Perception</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td rowSpan="3">M</td>
              <td><a href="#gui">Buccaneer's Lair</a></td>
              <td>Tara D'Cathay<br/>(<a href="#ns">New Sorpigal</a>)</td>
              <td>500</td>
              <td rowSpan="3">Macro Galigulia<br/>(<a href="#md">Mire of the Damned</a>)</td>
              <td rowSpan="3">Rank 7<br/>Luck 30</td>
              <td rowSpan="3">2500</td>
            </tr>
            <tr>
              <td><a href="#gui">Smuggler's Guild</a></td>
              <td rowSpan="2">Shoshi Pertoniki<br/>(<a href="#bb">Bootleg Bay</a>)</td>
              <td rowSpan="2">500</td>
            </tr>
            <tr>
              <td><a href="#gui">Protection Services</a></td>
            </tr>
            <tr>
              <td rowSpan="2">Repair Item</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td rowSpan="2">M</td>
              <td><a href="#gui">Berserker's Fury</a></td>
              <td>Bernard Jacobs<br/>(<a href="#mi">Misty Islands</a>)</td>
              <td>500</td>
              <td rowSpan="2">Ryan Treacle<br/>(<a href="#fz">Frozen Highlands</a>)</td>
              <td rowSpan="2">Rank 7<br/>Accuracy 30</td>
              <td rowSpan="2">2500</td>
            </tr>
            <tr>
              <td><a href="#gui">Blade's End</a></td>
              <td>Cyrus Montebleu<br/>(<a href="#sc">Silver Cove</a>)</td>
              <td>500</td>
            </tr>
            </tbody>
          </table>
      </section>

      <section id="gui">
        <h3>Guilds</h3>
        <table>
          <colgroup>
            <col span="2" className="left" />
              <col span="6" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Locate</th>
            <th colSpan="2">Membership</th>
            <th colSpan="2">Guild</th>
            <th>Open</th>
            <th>Reset
            </th>
          </tr>
          <tr>
            <td>Berserker's Fury</td>
            <td><a href="#ci">Castle Ironfist</a><br/><a href="#sc">Silver Cove</a></td>
            <td>#6<br/>#25</td>
            <td>50gp</td>
            <td>#7<br/>#6</td>
            <td>500gp<br/>625gp</td>
            <td>09 - 21h</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Blade's End</td>
            <td><a href="#ns">New Sorpigal</a><br/><a href="#fz">Frozen Highlands</a></td>
            <td>#3<br/>#25</td>
            <td>25gp</td>
            <td>#9<br/>#20</td>
            <td>375gp<br/>750gp</td>
            <td>09 - 21h</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Duelist's Edge</td>
            <td><a href="#mi">Misty Islands</a><br/><a href="#fh">Free Haven</a>)</td>
            <td>#21<br/>#38</td>
            <td>50gp</td>
            <td>#24<br/>#43</td>
            <td>500gp<br/>625gp</td>
            <td>09 - 21h</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Buccaneer's Lair</td>
            <td><a href="#ns">New Sorpigal</a><br/><a href="#mi">Misty Islands</a></td>
            <td>#2<br/>#23</td>
            <td>25gp</td>
            <td>#20<br/>#23</td>
            <td>150gp<br/>200gp</td>
            <td>18 - 06h</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Protection Services</td>
            <td><a href="#fz">Frozen Highlands</a><br/><a href="#sc">Silver Cove</a></td>
            <td>#6<br/>#15</td>
            <td>50gp</td>
            <td>#3<br/>#21</td>
            <td>250gp<br/>300gp</td>
            <td>18 - 06h</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Smuggler's Guild</td>
            <td><a href="#fh">Free Haven</a><br/><a href="#bs">Blackshire</a></td>
            <td>#41<br/>#19</td>
            <td>50gp</td>
            <td>-<br/>#18</td>
            <td>-<br/>250gp</td>
            <td>18 - 06h</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Elements Guild</td>
            <td><a href="#ns">New Sorpigal</a><br/><a href="#fz">Frozen Highlands</a></td>
            <td>#7<br/>#34</td>
            <td>100gp</td>
            <td>#28<br/>#22</td>
            <td>750gp<br/>1250gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Air Guild</td>
            <td><a href="#mi">Misty Islands</a><br/><a href="#fh">Free Haven</a></td>
            <td>#7<br/>#24</td>
            <td>50gp</td>
            <td>#4<br/>#12</td>
            <td>1000gp<br/>1500gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Earth Guild</td>
            <td><a href="#sc">Silver Cove</a><br/><a href="#fh">Free Haven</a></td>
            <td>#29<br/>#29</td>
            <td>50gp</td>
            <td>#19<br/>#17</td>
            <td>1000gp<br/>1500gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Fire Guild</td>
            <td><a href="#mi">Misty Islands</a><br/><a href="#fh">Free Haven</a></td>
            <td>#8<br/>#26</td>
            <td>50gp</td>
            <td>#2<br/>#11</td>
            <td>1000gp<br/>1500gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Water Guild</td>
            <td><a href="#mi">Misty Islands</a><br/><a href="#fh">Free Haven</a></td>
            <td>#6<br/>#28</td>
            <td>50gp</td>
            <td>#3<br/>#8</td>
            <td>1000gp<br/>1500gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Self Guild</td>
            <td><a href="#ns">New Sorpigal</a><br/><a href="#sc">Silver Cove</a></td>
            <td>#6<br/>#30</td>
            <td>100gp</td>
            <td>#27<br/>#16</td>
            <td>750gp<br/>1250gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Body Guild</td>
            <td><a href="#ci">Castle Ironfist</a><br/><a href="#fh">Free Haven</a></td>
            <td>#23<br/>#5</td>
            <td>50gp</td>
            <td>#18<br/>#15</td>
            <td>1000gp<br/>1500gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Mind Guild</td>
            <td><a href="#ci">Castle Ironfist</a><br/><a href="#fh">Free Haven</a></td>
            <td>#10<br/>#10</td>
            <td>50gp</td>
            <td>#18<br/>#48</td>
            <td>1000gp<br/>1500gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Spirit Guild</td>
            <td><a href="#ci">Castle Ironfist</a><br/><a href="#fh">Free Haven</a></td>
            <td>#22<br/>#6</td>
            <td>50gp</td>
            <td>#18<br/>#53</td>
            <td>1000gp<br/>1500gp</td>
            <td>06 - 18h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Light Guild</td>
            <td><a href="#sc">Silver Cove</a><br/><a href="#bs">Blackshire</a></td>
            <td>#27<br/>#22</td>
            <td>1000gp</td>
            <td>#20<br/>#16</td>
            <td>1500gp<br/>2000gp</td>
            <td>10 - 14h</td>
            <td>2d</td>
          </tr>
          <tr>
            <td>Dark Guild</td>
            <td><a href="#fz">Frozen Highlands</a><br/><a href="#bs">Blackshire</a></td>
            <td>#33<br/>#21</td>
            <td>1000gp</td>
            <td>#23<br/>#15</td>
            <td>1500gp<br/>2000gp</td>
            <td>22 - 02h</td>
            <td>2d</td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="tr">
        <h2>Seer</h2>
        <h3>Pilgrimages</h3>
        <p>When you visit the Seer and ask for a pilgrimage, she will send you to one of the
          twelve shrines and ask you to pray there. The shrine you are sent to is based on the
          month. A shrine will not reward you if you are not on a pilgrimage, but you do not
          have to visit the shrine that the Seer mentions, you can wait until a subsequent
          month and then visit the shrine for that month.
          The first time you do a pilgrimage, you get a permanent +10 to the attribute or resistance
          that the shrine is dedicated to. Future pilgrimages earn you a permanent +3 to that
          attribute or resistance.</p>
        <table className="center-table">
          <tbody>
          <tr>
            <th>Month</th>
            <th>Shrine</th>
            <th>Location</th>
          </tr>
          <tr>
            <td>January</td>
            <td>Might</td>
            <td><a href="#bb">Bootleg Bay</a></td>
          </tr>
          <tr>
            <td>February</td>
            <td>Intellect</td>
            <td><a href="#mi">Misty Islands</a></td>
          </tr>
          <tr>
            <td>March</td>
            <td>Personality</td>
            <td><a href="#sc">Silver Cove</a></td>
          </tr>
          <tr>
            <td>April</td>
            <td>Endurance</td>
            <td><a href="#fz">Frozen Highlands</a></td>
          </tr>
          <tr>
            <td>May</td>
            <td>Accuracy</td>
            <td><a href="#fh">Free Haven</a></td>
          </tr>
          <tr>
            <td>June</td>
            <td>Speed</td>
            <td><a href="#md">Mire of the Damned</a></td>
          </tr>
          <tr>
            <td>July</td>
            <td>Luck</td>
            <td><a href="#ns">New Sorpigal</a></td>
          </tr>
          <tr>
            <td>August</td>
            <td>Fire</td>
            <td><a href="#ks">Kriegspire</a></td>
          </tr>
          <tr>
            <td>September</td>
            <td>Electricity</td>
            <td><a href="#ci">Castle Ironfist</a></td>
          </tr>
          <tr>
            <td>October</td>
            <td>Cold</td>
            <td><a href="#ks">Kriegspire</a></td>
          </tr>
          <tr>
            <td>November</td>
            <td>Poison</td>
            <td><a href="#iw">Eel Infested Waters</a></td>
          </tr>
          <tr>
            <td>December</td>
            <td>Magic</td>
            <td><a href="#bs">Blackshire</a></td>
          </tr>
          </tbody>
        </table>
        <p>The Seer will also give you advice as to what you should do next in the game.</p>
        <ul>
          <li>You should probably show the sixth letter to Andover Potbello in <a href="#ns">New Sorpigal</a>.</li>
          <li>You need to give The Letter to Regent Wilbur Humphrey in <a href="#ci">Castle Ironfist</a>.</li>
          <li>You must satisfy the six High Council members in <a href="#fh">Free Haven</a>
            to visit the <a href="#fh_or">Oracle</a>. Each lord will request a task of you to earn their favor.
            Preform each of these tasks and then talk to the Council member of that Lord to
            gain their approval. Once all the members of the High Council gave their
            permission, you will be allowed to visit the <a href="#fh_or">Oracle</a>.
          </li>
          <li>It appears that Slicker Silvertongue is a traitor on the council. You will need proof
            to convince Regent Humphrey and have Slicker removed from the Council. Go to the
            <a href="#ks_st">Superior Temple of Baa</a> in <a href="#ks">Kriegspire</a> and
            return with proof associating Slicker with the Temple of Baa.
          </li>
          <li>The <a href="#fh_or">Oracle</a> has been asleep since Archibald performed his mischief
            on it. You will need the four memory crystals to revive the <a href="#fh_or">Oracle</a>.
            They can be found on <a href="#hi">Hermit's Isle</a>, in <a href="#iw_ca">Castle Alamos</a>,
            in <a href="#ks_ck">Castle Kriegspire</a>, and in <a href="#md_cd">Castle Darkmoor</a>.
          </li>
          <li>To gain access to the <a href="#fh_cc">Control Center</a>, you will need the Control
            Cube located in the <a href="#ds_tv">Temple of VARN</a> in <a href="#ds">Dragonsands</a>.
            Bring the Cube back to the <a href="#fh_or">Oracle</a> to gain admittance into the <a href="#fh_cc">Control
              Center</a>. The Kreegan reactor is immune to all attacks. Only the ancient weapons from the
            Control Center will harm the reactor. Make sure you have these weapons and the skill
            to use them.
          </li>
          <li>Before you destroy the reactor, you will need a spell capable of containing the resulting
            explosions. You must free Archibald from his stone prison. Talk to Nicholai and
            bring him the Third Eye -- he will allow you to use Tanir's Bell to turn Archibald back to
            normal. From there, you should be able to convince Archibald to give you the knowledge
            you need.
          </li>
          <li>Now you must destroy the <a href="#sw_hi">Kreegan Hive</a>. Destroy the reactor, defeat their queen, and
            make
            sure to escape with the Ritual of the Void and you will succeed in your task.
          </li>
        </ul>
      </section>

      <section id="ti">
        <h2>Items</h2>
        <table>
          <tbody>
          <tr>
            <td className="v-top">
              <table>
                <colgroup>
                  <col span="2" className="left" />
                    <col className="center" />
                      <col className="right" />
                </colgroup>
                <tbody>
                <tr>
                  <th className="center">Weapons</th>
                  <th className="center">Item</th>
                  <th>Damage/AC</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Swords</td>
                  <td>Longsword</td>
                  <td>3d3</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Warrior Sword</td>
                  <td>3d3+3</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Crusader Sword</td>
                  <td>3d3+6</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Champion Sword</td>
                  <td>3d3+9</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Lionheart Sword</td>
                  <td>3d3+12</td>
                  <td>650</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Cutlass</td>
                  <td>2d4</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Pirate Cutlass</td>
                  <td>2d4+5</td>
                  <td>290</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Master Cutlass</td>
                  <td>2d4+11</td>
                  <td>590</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Broadsword</td>
                  <td>3d4</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Steel Broadsword</td>
                  <td>3d4+4</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Mighty Broadsword</td>
                  <td>3d4+10</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Two-Handed Sword</td>
                  <td>4d5</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Great Sword</td>
                  <td>4d5+2</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Heroic Sword</td>
                  <td>4d5+8</td>
                  <td>800</td>
                </tr>
                <tr>
                  <td>Daggers</td>
                  <td>Dagger</td>
                  <td>2d2</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Blood Dagger</td>
                  <td>2d2+2</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Shadow Dagger</td>
                  <td>2d2+3</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Mage Dagger</td>
                  <td>2d2+5</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Jeweled Dagger</td>
                  <td>2d2+6</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Long Dagger</td>
                  <td>2d3</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Piercing Dagger</td>
                  <td>2d3+4</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Divine Dagger</td>
                  <td>2d3+7</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Axes</td>
                  <td>Hand Axe</td>
                  <td>4d2</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Battle Axe</td>
                  <td>4d2+2</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>War Axe</td>
                  <td>4d2+5</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Dwarven Axe</td>
                  <td>4d2+8</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Supreme Axe</td>
                  <td>4d2+11</td>
                  <td>550</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Poleax</td>
                  <td>3d7</td>
                  <td>225</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Heavy Poleax</td>
                  <td>3d7+3</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Grand Poleax</td>
                  <td>3d7+9</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Snergle's Axe</td>
                  <td>4d2+9</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Spears</td>
                  <td>Spear</td>
                  <td>1d9</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Stout Spear</td>
                  <td>1d9+1</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Serpent Spear</td>
                  <td>1d9+5</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Savage Spear</td>
                  <td>1d9+9</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Sacred Spear</td>
                  <td>1d9+13</td>
                  <td>650</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Halberd</td>
                  <td>3d6</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Massive Halberd</td>
                  <td>3d6+4</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Elite Halberd</td>
                  <td>3d6+10</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Trident</td>
                  <td>2d6</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Ornate Trident</td>
                  <td>2d6+6</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Titanic Trident</td>
                  <td>2d6+12</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>Bows</td>
                  <td>Longbow</td>
                  <td>5d2</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Elven Bow</td>
                  <td>5d2+2</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Precision Bow</td>
                  <td>5d2+4</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Magic Bow</td>
                  <td>5d2+6</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Stellar Bow</td>
                  <td>5d2+8</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Crossbow</td>
                  <td>4d2</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Accurate Crossbow</td>
                  <td>4d2+3</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>True Crossbow</td>
                  <td>4d2+7</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>Maces</td>
                  <td>Mace</td>
                  <td>2d4</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Wicked Mace</td>
                  <td>2d4+2</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Thunder Mace</td>
                  <td>2d4+5</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Wonder Mace</td>
                  <td>2d4+8</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Death Mace</td>
                  <td>2d4+11</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Hammer</td>
                  <td>2d5</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Dark Hammer</td>
                  <td>2d5+3</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Holy Hammer</td>
                  <td>2d5+9</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>Clubs</td>
                  <td>Club</td>
                  <td>1d3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Spiked Club</td>
                  <td>1d3+3</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Killer Club</td>
                  <td>1d3+5</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Staves</td>
                  <td>Staff</td>
                  <td>2d4</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Emerald Staff</td>
                  <td>2d4+3</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Power Staff</td>
                  <td>2d4+7</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Blasters</td>
                  <td>Blaster</td>
                  <td>3d5+8</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Blaster Rifle</td>
                  <td>5d5+12</td>
                  <td>1</td>
                </tr>
                </tbody>
              </table>
            </td>
            <td className="v-top">
              <table>
                <colgroup>
                  <col span="2" className="left" />
                    <col className="center" />
                      <col className="right" />
                </colgroup>
                <tbody>
                <tr>
                  <th className="center">Armors</th>
                  <th className="center">Item</th>
                  <th>AC</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Leather Armors</td>
                  <td>Leather Armor</td>
                  <td>4</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Studded Leather</td>
                  <td>6</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Enchanted Leather</td>
                  <td>10</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Dragon Leather</td>
                  <td>16</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Imperial Leather</td>
                  <td>24</td>
                  <td>1150</td>
                </tr>
                <tr>
                  <td>Chain Armors</td>
                  <td>Chain Mail</td>
                  <td>8</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Steel Chain Mail</td>
                  <td>12</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Noble Chain Mail</td>
                  <td>18</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Royal Chain Mail</td>
                  <td>26</td>
                  <td>1300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Majestic Chain Mail</td>
                  <td>36</td>
                  <td>1800</td>
                </tr>
                <tr>
                  <td>Plate Armors</td>
                  <td>Plate Armor</td>
                  <td>20</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Steel Plate Armor</td>
                  <td>28</td>
                  <td>1400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Golden Plate Armor</td>
                  <td>54</td>
                  <td>2700</td>
                </tr>
                <tr>
                  <td>Shields</td>
                  <td>Wooden Shield</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Bronze Shield</td>
                  <td>6</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Steel Shield</td>
                  <td>8</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Spirit Shield</td>
                  <td>12</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Astral Shield</td>
                  <td>18</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Kite Shield</td>
                  <td>6</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Tower Shield</td>
                  <td>7</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Castle Shield</td>
                  <td>9</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Celestial Sheild</td>
                  <td>13</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Olympian Shield</td>
                  <td>19</td>
                  <td>800</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Lord Kilburn's Shield</td>
                  <td>9</td>
                  <td>-</td>
                </tr>
                </tbody>
              </table>
              <br/>
                <table>
                  <colgroup>
                    <col span="2" className="left" />
                      <col className="center" />
                        <col className="right" />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th className="center">Misc Items</th>
                    <th className="center">Item</th>
                    <th>AC</th>
                    <th>Value</th>
                  </tr>
                  <tr>
                    <td>Helms</td>
                    <td>Helm</td>
                    <td>2</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Steel Helm</td>
                    <td>6</td>
                    <td>260</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Guardian Helm</td>
                    <td>8</td>
                    <td>460</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Defender Helm</td>
                    <td>10</td>
                    <td>660</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Angelic Helm</td>
                    <td>12</td>
                    <td>860</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Cloth Hat</td>
                    <td>-</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Fancy Hat</td>
                    <td>-</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Wizard Cap</td>
                    <td>-</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Crown</td>
                    <td>-</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Regal Crown</td>
                    <td>-</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Almighty Crown</td>
                    <td>-</td>
                    <td>650</td>
                  </tr>
                  <tr>
                    <td>Belt</td>
                    <td>Leather Belt</td>
                    <td>-</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Mercenary Belt</td>
                    <td>-</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Vanguard Belt</td>
                    <td>-</td>
                    <td>225</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Warlord Belt</td>
                    <td>-</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Sovereign Belt</td>
                    <td>-</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Cloaks</td>
                    <td>Leather Cloak</td>
                    <td>1</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Phantom Cloak</td>
                    <td>3</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Elven Cloak</td>
                    <td>5</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Cardinal Cloak</td>
                    <td>7</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Doom's Day Cloak</td>
                    <td>9</td>
                    <td>750</td>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                    <td>Gauntlets</td>
                    <td>Gauntlets</td>
                    <td>3</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Knight Gauntlets</td>
                    <td>6</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Paladin Gauntlets</td>
                    <td>8</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Cavaleer Gauntlets</td>
                    <td>10</td>
                    <td>650</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ultimate Gauntlets</td>
                    <td>12</td>
                    <td>850</td>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                    <td>Boots</td>
                    <td>Leather Boots</td>
                    <td>2</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Steel Boots</td>
                    <td>6</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Armored Boots</td>
                    <td>8</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Sterling Boots</td>
                    <td>10</td>
                    <td>650</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ultimate Boots</td>
                    <td>12</td>
                    <td>850</td>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                    <td>Rings</td>
                    <td>Fine Ring</td>
                    <td>-</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Sparkling Ring</td>
                    <td>-</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Lunar Ring</td>
                    <td>-</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Witch Ring</td>
                    <td>-</td>
                    <td>700</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Blessed Ring</td>
                    <td>-</td>
                    <td>900</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Valuable Ring</td>
                    <td>-</td>
                    <td>1100</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Precious Ring</td>
                    <td>-</td>
                    <td>1300</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ethereal Ring</td>
                    <td>-</td>
                    <td>1500</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Exquisite Ring</td>
                    <td>-</td>
                    <td>1700</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Scarab Ring</td>
                    <td>-</td>
                    <td>2000</td>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                    <td>Amulets</td>
                    <td>Turquoise Amulet</td>
                    <td>-</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Gothic Amulet</td>
                    <td>-</td>
                    <td>750</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Claw Amulet</td>
                    <td>-</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ancient Amulet</td>
                    <td>-</td>
                    <td>1250</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Ruby Star Amulet</td>
                    <td>-</td>
                    <td>1500</td>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                    <td>Wands</td>
                    <td>Wands</td>
                    <td>-</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Fairy Wands</td>
                    <td>-</td>
                    <td>1500</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Alacorn Wands</td>
                    <td>-</td>
                    <td>2000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Arcane Wands</td>
                    <td>-</td>
                    <td>2500</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Mystic Wands</td>
                    <td>-</td>
                    <td>3000</td>
                  </tr>
                  <tr>
                  </tr>
                  </tbody>
                </table>
            </td>
            <td className="v-top">
              <table>
                <colgroup>
                  <col span="2" className="left" />
                    <col className="right" />
                </colgroup>
                <tbody>
                <tr>
                  <th className="center">Magical items</th>
                  <th className="center">Item</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Books</td>
                  <td>1<sup>st</sup> Normal Spellbook</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>2<sup>nd</sup> Normal Spellbook</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>3<sup>rd</sup> Normal Spellbook</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>4<sup>th</sup> Normal Spellbook</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>5<sup>th</sup> Normal Spellbook</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>6<sup>th</sup> Normal Spellbook</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td></td>
                  <td>7<sup>th</sup> Normal Spellbook</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>8<sup>th</sup> Normal Spellbook</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>9<sup>th</sup> Normal Spellbook</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>10<sup>th</sup> Normal Spellbook</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>11<sup>th</sup> Normal Spellbook</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>1<sup>st</sup> Light/Dark Spellbook</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>2<sup>nd</sup> Light/Dark Spellbook</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>3<sup>rd</sup> Light/Dark Spellbook</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>4<sup>th</sup> Light/Dark Spellbook</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>5<sup>th</sup> Light/Dark Spellbook</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>6<sup>th</sup> Light/Dark Spellbook</td>
                  <td>3500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>7<sup>th</sup> Light/Dark Spellbook</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>8<sup>th</sup> Light/Dark Spellbook</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>9<sup>th</sup> Light/Dark Spellbook</td>
                  <td>6000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>10<sup>th</sup> Light/Dark Spellbook</td>
                  <td>7500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>11<sup>th</sup> Light/Dark Spellbook</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>Scrolls</td>
                  <td>1<sup>st</sup> Normal Spell Scroll</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td></td>
                  <td>2<sup>nd</sup> Normal Spell Scroll</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td></td>
                  <td>3<sup>rd</sup> Normal Spell Scroll</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td></td>
                  <td>4<sup>th</sup> Normal Spell Scroll</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td></td>
                  <td>5<sup>th</sup> Normal Spell Scroll</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td></td>
                  <td>6<sup>th</sup> Normal Spell Scroll</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td></td>
                  <td>7<sup>th</sup> Normal Spell Scroll</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>8<sup>th</sup> Normal Spell Scroll</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td></td>
                  <td>9<sup>th</sup> Normal Spell Scroll</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>10<sup>th</sup> Normal Spell Scroll</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>11<sup>th</sup> Normal Spell Scroll</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>1<sup>st</sup> Light/Dark Spell Scroll</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td></td>
                  <td>2<sup>nd</sup> Light/Dark Spell Scroll</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td></td>
                  <td>3<sup>rd</sup> Light/Dark Spell Scroll</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td></td>
                  <td>4<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td></td>
                  <td>5<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td></td>
                  <td>6<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td></td>
                  <td>7<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td></td>
                  <td>8<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td></td>
                  <td>9<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td></td>
                  <td>10<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td></td>
                  <td>11<sup>th</sup> Light/Dark Spell Scroll</td>
                  <td>1000</td>
                </tr>
                </tbody>
              </table>
              <br/>
                <table>
                  <colgroup>
                    <col span="2" className="left" />
                      <col className="right" />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th className="center">Potions</th>
                    <th className="center">Item</th>
                    <th>Value</th>
                  </tr>
                  <tr>
                    <td>Ingredients</td>
                    <td>Poppysnaps</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Phirna Root</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Widoweeps Berries</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Empty Bottle</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Potions</td>
                    <td>Red Potion</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Orange Potion</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Yellow Potion</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Green Potion</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Blue Potion</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Purple Potion</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>White Potion (any)</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Black Potion (any)</td>
                    <td>100</td>
                  </tr>
                  </tbody>
                </table>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="ta">
        <h2>Artifacts</h2>
        <table>
          <colgroup>
            <col span="3" className="left" />
              <col span="2" className="right" />
                <col className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th>Main Type</th>
            <th>Artifact Name</th>
            <th>Item Type</th>
            <th>Damage/AC</th>
            <th>Value</th>
            <th>Abilities</th>
          </tr>
          <tr>
            <td>Weapons</td>
            <td>Hades</td>
            <td>Longsword</td>
            <td>3d3+15</td>
            <td>30000</td>
            <td>+20 Poison Damage, +20 Luck, Thievery, Negative Regeneration</td>
          </tr>
          <tr>
            <td></td>
            <td>Excalibur</td>
            <td>Broadsword</td>
            <td>3d4+12</td>
            <td>20000</td>
            <td>+30 Might</td>
          </tr>
          <tr>
            <td></td>
            <td>Hercules</td>
            <td>2-Handed Sword</td>
            <td>4d5+12</td>
            <td>30000</td>
            <td>+50 Might, +20 Endurance, -30 Intellect</td>
          </tr>
          <tr>
            <td></td>
            <td>Mordred</td>
            <td>Long Dagger</td>
            <td>2d3+8</td>
            <td>20000</td>
            <td>Vampiric</td>
          </tr>
          <tr>
            <td></td>
            <td>Cronos</td>
            <td>Axe</td>
            <td>4d2+14</td>
            <td>30000</td>
            <td>+100 HP, -50 Luck</td>
          </tr>
          <tr>
            <td></td>
            <td>Conan</td>
            <td>Poleax</td>
            <td>3d7+10</td>
            <td>20000</td>
            <td>Devil and Dragon Slaying</td>
          </tr>
          <tr>
            <td></td>
            <td>Poseidon</td>
            <td>Trident</td>
            <td>2d6+15</td>
            <td>30000</td>
            <td>+20 Might, +20 Endurance, +20 Accuracy, -10 AC, -10 Speed</td>
          </tr>
          <tr>
            <td></td>
            <td>Artemis</td>
            <td>Longbow</td>
            <td>5d2+12</td>
            <td>30000</td>
            <td>+20 Electricity damage, -10 Resistances</td>
          </tr>
          <tr>
            <td></td>
            <td>Percival</td>
            <td>Longbow</td>
            <td>5d2+10</td>
            <td>20000</td>
            <td>Swiftness, Carnage</td>
          </tr>
          <tr>
            <td></td>
            <td>Ares</td>
            <td>Mace</td>
            <td>2d4+14</td>
            <td>30000</td>
            <td>+30 Fire Damage, +25 Fire Resistance</td>
          </tr>
          <tr>
            <td></td>
            <td>Thor</td>
            <td>Hammer</td>
            <td>2d5+12</td>
            <td>20000</td>
            <td>of Force</td>
          </tr>
          <tr>
            <td></td>
            <td>Merlin</td>
            <td>Staff</td>
            <td>2d4+8</td>
            <td>20000</td>
            <td>Swiftness, +40 SP</td>
          </tr>
          <tr>
            <td>Armors</td>
            <td>Apollo</td>
            <td>Chain Armor</td>
            <td>46</td>
            <td>30000</td>
            <td>+20 Resistances, +20 Luck, -30 Endurance</td>
          </tr>
          <tr>
            <td></td>
            <td>Galahad</td>
            <td>Chain Armor</td>
            <td>38</td>
            <td>20000</td>
            <td>Protection, +25 HP</td>
          </tr>
          <tr>
            <td></td>
            <td>Pellinore</td>
            <td>Plate Armor</td>
            <td>56</td>
            <td>20000</td>
            <td>+30 Endurance, Hit Recovery, HP Regeneration</td>
          </tr>
          <tr>
            <td></td>
            <td>Zeus</td>
            <td>Plate Armor</td>
            <td>64</td>
            <td>30000</td>
            <td>+50 HP, +50 SP, +50 Luck, -50 Intellect</td>
          </tr>
          <tr>
            <td></td>
            <td>Valeria</td>
            <td>Small Shield</td>
            <td>20</td>
            <td>20000</td>
            <td>Shielding, +30 Accuracy</td>
          </tr>
          <tr>
            <td></td>
            <td>Aegis</td>
            <td>Large Shield</td>
            <td>29</td>
            <td>30000</td>
            <td>Immune to Stoning, Shielding, +20 Luck, -20 Speed</td>
          </tr>
          <tr>
            <td>Misc</td>
            <td>Arthur</td>
            <td>Helm</td>
            <td>5</td>
            <td>20000</td>
            <td>of the Gods, +25 SP</td>
          </tr>
          <tr>
            <td></td>
            <td>Odin</td>
            <td>Crown</td>
            <td>10</td>
            <td>30000</td>
            <td>+50 Resistances, -40 Speed</td>
          </tr>
          <tr>
            <td></td>
            <td>Atlas</td>
            <td>Cloak</td>
            <td>16</td>
            <td>30000</td>
            <td>+100 Might, -40 Speed</td>
          </tr>
          <tr>
            <td></td>
            <td>Pendragon</td>
            <td>Cloak</td>
            <td>11</td>
            <td>20000</td>
            <td>+30 Luck, Thievery, Immunity to Poison</td>
          </tr>
          <tr>
            <td></td>
            <td>Hermes</td>
            <td>Boots</td>
            <td>17</td>
            <td>30000</td>
            <td>+100 Speed, -40 Accuracy</td>
          </tr>
          <tr>
            <td></td>
            <td>Lucius</td>
            <td>Boots</td>
            <td>14</td>
            <td>20000</td>
            <td>+30 Speed</td>
          </tr>
          <tr>
            <td></td>
            <td>Aphrodite</td>
            <td>Ring</td>
            <td>4</td>
            <td>30000</td>
            <td>+100 Personality, -40 Luck</td>
          </tr>
          <tr>
            <td></td>
            <td>Athena</td>
            <td>Ring</td>
            <td>4</td>
            <td>30000</td>
            <td>+100 Intellect, -40 Might</td>
          </tr>
          <tr>
            <td></td>
            <td>Guinevere</td>
            <td>Ring</td>
            <td>2</td>
            <td>20000</td>
            <td>+30 SP, of Light Magic, of Dark Magic</td>
          </tr>
          <tr>
            <td></td>
            <td>Igraine</td>
            <td>Ring</td>
            <td>2</td>
            <td>20000</td>
            <td>+25 SP, of Body, of Mind, of Spirit Magic</td>
          </tr>
          <tr>
            <td></td>
            <td>Hera</td>
            <td>Amulet</td>
            <td>6</td>
            <td>30000</td>
            <td>+50 HP, +50 SP, +50 Luck, -50 Intellect</td>
          </tr>
          <tr>
            <td></td>
            <td>Morgan</td>
            <td>Amulet</td>
            <td>3</td>
            <td>20000</td>
            <td>+20 SP, of Fire, of Air, of Water, of Earth Magic</td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="te">
        <h2>Enchantments</h2>
        <table>
          <tbody>
          <tr>
            <td className="v-top">
              <table>
                <colgroup>
                  <col span="2" className="left" />
                    <col className="right" />
                </colgroup>
                <tbody>
                <tr>
                  <th>Enchantments</th>
                  <th>Effect</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>of Protection</td>
                  <td>+10 to all Resistances</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of The Gods</td>
                  <td>+10 to all 7 main value</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>of Carnage</td>
                  <td>Exploding arrows</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>of Cold</td>
                  <td>1D2 + 2 cold damage</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>of Frost</td>
                  <td>1D3 +5 cold damage</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Ice</td>
                  <td>1D4 + 8 cold damage</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Sparks</td>
                  <td>1D4 + 1 electrical damage</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>of Lightning</td>
                  <td>2D4 + 2 electrical damage</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Thunderbolts</td>
                  <td>3D4 + 3 electrical damage</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Fire</td>
                  <td>1D6 fire damage</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>of Flame</td>
                  <td>2D6 fire damage</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Infernos</td>
                  <td>3D6 fire damage</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Poison</td>
                  <td>5 poison damage</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>of Venom</td>
                  <td>8 poison damage</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Acid</td>
                  <td>12 poison damage</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Vampiric</td>
                  <td>20% of caused damage to wielder's HP</td>
                  <td>* 2</td>
                </tr>
                <tr>
                  <td>of Recovery</td>
                  <td>Increase recovery rate</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>of Immunity</td>
                  <td>Immune to disease condition</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Sanity</td>
                  <td>Immune to insane condition</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Freedom</td>
                  <td>Immune to paralyzed condition</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Antidotes</td>
                  <td>Immune to poison condiditon</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Alarms</td>
                  <td>Immune to sleep condition</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>of The Medusa</td>
                  <td>Immune to stoned condition</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Force</td>
                  <td>Increase knockback (* 10)</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>of Power</td>
                  <td>+5 level</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <td>of Air Magic</td>
                  <td>+50% to Air Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Body Magic</td>
                  <td>+50% to Body Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Dark Magic</td>
                  <td>+50% to Dark Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Earth Magic</td>
                  <td>+50% to Earth Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Fire Magic</td>
                  <td>+50% to Fire Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Light Magic</td>
                  <td>+50% to Light Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Mind Magic</td>
                  <td>+50% to Mind Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Spirit Magic</td>
                  <td>+50% to Spirit Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Water Magic</td>
                  <td>+50% to Water Magic</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Thievery</td>
                  <td>Double change of Disarming</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Shielding</td>
                  <td>Half damage from missiles</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Regeneration</td>
                  <td>Regenerate 1 HP / 5m</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of Mana</td>
                  <td>Regenerate 1 SP / 5m</td>
                  <td>1000</td>
                </tr>
                </tbody>
              </table>
            </td>
            <td className="v-top">
              <table>
                <colgroup>
                  <col span="2" className="left" />
                    <col className="right" />
                </colgroup>
                <tbody>
                <tr>
                  <th>Enchantments</th>
                  <th>Effect</th>
                  <th>Value</th>
                </tr>
                <tr>
                  <td>Demon Slayer</td>
                  <td>Double damage on Demons</td>
                  <td>* 2</td>
                </tr>
                <tr>
                  <td>Dragon Slayer</td>
                  <td>Double damage on Dragons</td>
                  <td>* 2</td>
                </tr>
                <tr>
                  <td>of Darkness</td>
                  <td>20% of caused damage to wielder's HP,<br/>increased weapon speed.</td>
                  <td>* 3</td>
                </tr>
                <tr>
                  <td>of Doom</td>
                  <td>+1 to every value</td>
                  <td>750</td>
                </tr>
                <tr>
                  <td>of Earth</td>
                  <td>+10 Endurance, AC, HP</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of Life</td>
                  <td>+10 HP, Regenerate 1 HP / 5m</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Rogues</td>
                  <td>+5 Speed and Accuracy</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>of The Dragon</td>
                  <td>10D2 fire damage, +25 Might</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>of The Eclipse</td>
                  <td>+10 SP, Regenerate 1 SP / 5m</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>of The Golem</td>
                  <td>+15 Endurance, +5 AC</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>of The Moon</td>
                  <td>+10 Intellect and Luck</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of The Phoenix</td>
                  <td>+30 Fire Resistance, Regenerate 1 HP / 5m</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>of The Sky</td>
                  <td>+10 SP, Speed, Intellect</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <td>of The Stars</td>
                  <td>+10 Endurance and Accuracy</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of The Sun</td>
                  <td>+10 Might and Personality</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>of The Troll</td>
                  <td>+15 Endurance, Regenerate 1 HP / 5m</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>of The Unicorn</td>
                  <td>+15 Luck, Regenerate 1 SP / 5m</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>Warriors</td>
                  <td>+5 Might and Endurance</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Wizards</td>
                  <td>+5 Intellect and Personality</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Antique</td>
                  <td>Increased value</td>
                  <td>* 10</td>
                </tr>
                <tr>
                  <td>of Swiftness</td>
                  <td>Increased Weapon Speed</td>
                  <td>* 2</td>
                </tr>
                </tbody>
              </table>
              <br/>
                <table>
                  <colgroup>
                    <col span="2" className="left" />
                      <col className="right" />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th>Enchantments</th>
                    <th>Effect</th>
                    <th>Value</th>
                  </tr>
                  <tr>
                    <td>of Might</td>
                    <td>+X to Might</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Thought</td>
                    <td>+X to Intellect</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Charm</td>
                    <td>+X to Personality</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Vigor</td>
                    <td>+X to Endurance</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Precision</td>
                    <td>+X to Accuracy</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Speed</td>
                    <td>+X to Speed</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Luck</td>
                    <td>+X to Luck</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Health</td>
                    <td>+X Hit Points</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Magic</td>
                    <td>+X Spell Points</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Defense</td>
                    <td>+X to AC</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Fire Resistance</td>
                    <td>+X to Fire Resistance</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Electrical Resistance</td>
                    <td>+X to Electical Resistance</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Cold Resistance</td>
                    <td>+X to Cold Resistance</td>
                    <td>X * 100</td>
                  </tr>
                  <tr>
                    <td>of Poison Resistance</td>
                    <td>+X to Poison Resistance</td>
                    <td>X * 100</td>
                  </tr>
                  </tbody>
                </table>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="tp">
        <h2>Potions</h2>
        <table>
          <tbody>
          <tr>
            <th>Potion</th>
            <th>Color</th>
            <th>Effect</th>
            <th colSpan="2" className="center">Ingredients</th>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>+2 hit points</td>
            <td colSpan="2">Phirna Root</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>+2 spell points</td>
            <td colSpan="2">Widosweeps Berries</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>Causes Poison</td>
            <td colSpan="2">Poppysnaps</td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>Cure Wounds</td>
            <td>Red</td>
            <td>+10 hit points</td>
            <td>Widosweeps Berries</td>
            <td>Empty Bottle</td>
          </tr>
          <tr>
            <td>Magic Potion</td>
            <td>Blue</td>
            <td>+10 spell points</td>
            <td>Phirna Root</td>
            <td>Empty Bottle</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>Yellow</td>
            <td>+10 statistics temporarily</td>
            <td>Poppysnaps</td>
            <td>Empty Bottle</td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>Cure Poison</td>
            <td>Purple</td>
            <td>Cures Poison</td>
            <td>Blue</td>
            <td>Red</td>
          </tr>
          <tr>
            <td>Protection</td>
            <td>Orange</td>
            <td>+10 AC temporarily</td>
            <td>Red</td>
            <td>Yellow</td>
          </tr>
          <tr>
            <td>Resistance</td>
            <td>Green</td>
            <td>+10 Resistances temporarily</td>
            <td>Blue</td>
            <td>Yellow</td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>Restoration</td>
            <td>White</td>
            <td>Cures all conditions except dead or stone</td>
            <td>Green</td>
            <td>Purple</td>
          </tr>
          <tr>
            <td>Super Resistance</td>
            <td>White</td>
            <td>+20 Resistances temporarily</td>
            <td>Blue</td>
            <td>Green</td>
          </tr>
          <tr>
            <td>Supreme Protection</td>
            <td>White</td>
            <td>+20 AC temporarily</td>
            <td>Green</td>
            <td>Orange</td>
          </tr>
          <tr>
            <td>Extreme Energy</td>
            <td>White</td>
            <td>+20 statistics temporarily</td>
            <td>Orange</td>
            <td>Yellow</td>
          </tr>
          <tr>
            <td>Bless</td>
            <td>White</td>
            <td>Bless to 6h</td>
            <td>Blue</td>
            <td>Purple</td>
          </tr>
          <tr>
            <td>Haste</td>
            <td>White</td>
            <td>Haste to 6h</td>
            <td>Green</td>
            <td>Yellow</td>
          </tr>
          <tr>
            <td>Heroism</td>
            <td>White</td>
            <td>Heroism to 6h</td>
            <td>Orange</td>
            <td>Red</td>
          </tr>
          <tr>
            <td>Stone Skin</td>
            <td>White</td>
            <td>Stone Skin to 6h</td>
            <td>Blue</td>
            <td>Orange</td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>Essence of Accuracy</td>
            <td>Black</td>
            <td>+15 Accuracy, -5 Luck permanently (once only)</td>
            <td>Yellow</td>
            <td>Bless</td>
          </tr>
          <tr>
            <td>Essence of Endurance</td>
            <td>Black</td>
            <td>+15 Endurance, -1 all other permanently (once only)</td>
            <td>Yellow</td>
            <td>Supreme Protection</td>
          </tr>
          <tr>
            <td>Essence of Intellect</td>
            <td>Black</td>
            <td>+15 Intellect, -5 Might permanently (once only)</td>
            <td>Blue</td>
            <td>Stone Skin</td>
          </tr>
          <tr>
            <td>Essence of Luck</td>
            <td>Black</td>
            <td>+15 Luck, -5 Accuracy permanently (once only)</td>
            <td>Purple</td>
            <td>Super Resistance</td>
          </tr>
          <tr>
            <td>Essence of Might</td>
            <td>Black</td>
            <td>+15 Might, -5 Intellect permanently (once only)</td>
            <td>Red</td>
            <td>Heroism</td>
          </tr>
          <tr>
            <td>Essence of Personality</td>
            <td>Black</td>
            <td>+15 Personality, -5 Speed permanently (once only)</td>
            <td>Blue</td>
            <td>Restoration</td>
          </tr>
          <tr>
            <td>Essence of Speed</td>
            <td>Black</td>
            <td>+15 Speed, -5 Personality permanently (once only)</td>
            <td>Red</td>
            <td>Haste</td>
          </tr>
          <tr>
            <td>Divine Cure</td>
            <td>Black</td>
            <td>+100 hit points, +1 year to age</td>
            <td>Orange</td>
            <td>Restoration</td>
          </tr>
          <tr>
            <td>Divine Magic</td>
            <td>Black</td>
            <td>+100 spell points, +1 year to age</td>
            <td>Green</td>
            <td>Super Resistance</td>
          </tr>
          <tr>
            <td>Divine Power</td>
            <td>Black</td>
            <td>+20 level temporarily, +1 year to age</td>
            <td>Purple</td>
            <td>Extreme Energy</td>
          </tr>
          <tr>
            <td>Rejuvenation</td>
            <td>Black</td>
            <td>Removes magical aging, -1 statistics permanently</td>
            <td>Green</td>
            <td>Extreme Energy</td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="rep">
        <h2>Reputation</h2>
        <table>
          <colgroup>
            <col span="5" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Value</th>
            <th>Rank</th>
            <th>Value</th>
            <th>Rank</th>
          </tr>
          <tr>
            <td colSpan="4">0 to 199: Average</td>
          </tr>
          <tr>
            <td>200 to 399</td>
            <td>Respectable</td>
            <td>-1 to -299</td>
            <td>Bad</td>
          </tr>
          <tr>
            <td>400 to 599</td>
            <td>Honorable</td>
            <td>-300 to -599</td>
            <td>Vile</td>
          </tr>
          <tr>
            <td>600 to 799</td>
            <td>Glorius</td>
            <td>-600 to -799</td>
            <td>Despicable</td>
          </tr>
          <tr>
            <td>800 to 999</td>
            <td>Angelic</td>
            <td>-800 to -999</td>
            <td>Monstrous</td>
          </tr>
          <tr>
            <td>999&gt;</td>
            <td>Saintly</td>
            <td>-999&lt;</td>
            <td>Notorious</td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="tsp">
        <h2>Spells</h2>
        <p>The key for the type column below:
          <br/><code>O </code>= Offensive spells
            <br/><code>D </code>= Defensive spells
              <br/><code>H </code>= Healing, restoring or removing spells
                <br/><code>U </code>= Utility spells
        </p>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Fire Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Torch Light</td>
            <td>U</td>
            <td>-</td>
            <td>1</td>
            <td>Increases the radius of light.<br/>Since 21h to 5h, or indoor any time.</td>
            <td>Duration is skill * 1h.</td>
            <td>Brighter light.</td>
            <td>Brightest light.</td>
          </tr>
          <tr>
            <td>Flame Arrow</td>
            <td>O</td>
            <td>Fire</td>
            <td>2</td>
            <td>Single flying arrow.<br/>1D8 damage.</td>
            <td>Casting cost 2 SP.</td>
            <td>Casting cost 1 SP.<br/>Faster recovery rate.</td>
            <td>Casting cost 0 SP.<br/>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Protection from Fire</td>
            <td>D</td>
            <td>-</td>
            <td>3</td>
            <td>Increases all character's resistance.<br/>Duration is skill * 1h.</td>
            <td>Skill * 1 resistance.</td>
            <td>Skill * 2 resistance.</td>
            <td>Skill * 3 resistance.</td>
          </tr>
          <tr>
            <td>Fire Bolt</td>
            <td>O</td>
            <td>Fire</td>
            <td>4</td>
            <td>Single flying bolt.<br/>Skill * 1D4 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Haste</td>
            <td>U</td>
            <td>-</td>
            <td>5</td>
            <td>Reduces recovery rate.<br/>Wearing off causes weakness.</td>
            <td>Duration is skill * 1m + 1h.</td>
            <td>Spell affects entire party.</td>
            <td>Duration is skill * 3m + 1 hour.</td>
          </tr>
          <tr>
            <td>Fireball</td>
            <td>O</td>
            <td>Fire</td>
            <td>8</td>
            <td>Single flying exploding ball.<br/>Skill * 1D6 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Ring of Fire</td>
            <td>O</td>
            <td>Fire</td>
            <td>10</td>
            <td>Hurt all monsters around the party.<br/>Skill + 6 damage.</td>
            <td>Small radius.</td>
            <td>Larger radius.</td>
            <td>Faster recovery rate.</td>
          </tr>
          <tr>
            <td>Fire Blast</td>
            <td>O</td>
            <td>Fire</td>
            <td>15</td>
            <td>Multiple flying shots.<br/>Skill * 1D3 + 4 damage (every shots).</td>
            <td>3 shots.<br/>Slow recovery rate.</td>
            <td>5 shots.<br/>Moderate recovery rate.</td>
            <td>7 shots.<br/>Fast recovery rate.</td>
          </tr>
          <tr>
            <td>Meteor Shower</td>
            <td>O</td>
            <td>Fire</td>
            <td>20</td>
            <td>Multiple falling meteors. Works outdoors only.<br/>Skill + 8 damage (every meteors).</td>
            <td>8 meteors.<br/>Slow recovery rate.</td>
            <td>12 meteors.<br/>Moderate recovery rate.</td>
            <td>16 meteors.<br/>Fast recovery rate.</td>
          </tr>
          <tr>
            <td>Inferno</td>
            <td>O</td>
            <td>Fire</td>
            <td>25</td>
            <td>Burns all monsters in sight. Works indoors only.<br/>Skill + 12 damage.</td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Incinerate</td>
            <td>O</td>
            <td>Fire</td>
            <td>30</td>
            <td>Single flying bolt.<br/>Skill * 1D15 + 15 damage.</td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Air Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Wizard Eye</td>
            <td>U</td>
            <td>-</td>
            <td>1</td>
            <td>Automap with important points.<br/>Duration is skill * 1h.</td>
            <td>Shows terrain and monsters.</td>
            <td>Shows treasure.</td>
            <td>Shows misc things</td>
          </tr>
          <tr>
            <td>Static Charge</td>
            <td>O</td>
            <td>Elec</td>
            <td>2</td>
            <td>Single flying bolt.<br/>1D5+1 damage (always hits).</td>
            <td>Casting cost 2 SP.</td>
            <td>Casting cost 1 SP.<br/>Faster recovery rate.</td>
            <td>Casting cost 0 SP.<br/>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Protection from Electricity</td>
            <td>D</td>
            <td>-</td>
            <td>3</td>
            <td>Increases all character's resistance.<br/>Duration is skill * 1h.</td>
            <td>Skill * 1 resistance.</td>
            <td>Skill * 2 resistance.</td>
            <td>Skill * 3 resistance.</td>
          </tr>
          <tr>
            <td>Sparks</td>
            <td>O</td>
            <td>Elec</td>
            <td>4</td>
            <td>Multiple falling sparks.<br/>Skill + 2 damage (every spark)</td>
            <td>3 sparks.<br/>Moderate recovery rate.</td>
            <td>5 sparks.<br/>Faster recovery rate.</td>
            <td>7 sparks.<br/>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Feather Fall</td>
            <td>U</td>
            <td>-</td>
            <td>5</td>
            <td>Prevents from being hurt when falling.<br/>Affects entire party.</td>
            <td>Duration is skill * 5m.</td>
            <td>Duration is skill * 10m.</td>
            <td>Duration is skill * 1h.</td>
          </tr>
          <tr>
            <td>Shield</td>
            <td>D</td>
            <td>-</td>
            <td>8</td>
            <td>Halves damage from physical ranged attacks.<br/>Slows the missiles.</td>
            <td>Duration is skill * 5m +1h.</td>
            <td>Affects entire party.</td>
            <td>Duration is skill * 15m +1h.</td>
          </tr>
          <tr>
            <td>Lightning Bolt</td>
            <td>O</td>
            <td>Elec</td>
            <td>10</td>
            <td>Single flying bolt.<br/>Skill * 1D8 damage (always hits).</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Jump</td>
            <td>U</td>
            <td>-</td>
            <td>15</td>
            <td>Launches the party up.<br/>No falling damage from the jump.</td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Implosion</td>
            <td>O</td>
            <td>Phys</td>
            <td>20</td>
            <td>Single flying bolt.<br/>Skill * 1d10 + 10 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Fly</td>
            <td>U</td>
            <td>-</td>
            <td>25</td>
            <td>Affects entire party. Works outdoors only.<br/>1 SP / 5m. No falling damage.</td>
            <td>Duration is skill * 5m.</td>
            <td>Duration is skill * 10m.</td>
            <td>Duration is skill * 1h.</td>
          </tr>
          <tr>
            <td>Starburst</td>
            <td>O</td>
            <td>Elec</td>
            <td>30</td>
            <td>Multiple falling stars. Works outdoors only.<br/>Skill + 20 damage (every stars).</td>
            <td>8 stars.<br/>Slow recovery rate.</td>
            <td>12 stars.<br/>Moderate recovery rate.</td>
            <td>16 stars.<br/>Fast recovery rate.</td>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Water Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Awaken</td>
            <td>H</td>
            <td>-</td>
            <td>1</td>
            <td>Awakens all sleeping characters.</td>
            <td>Works if asleep &lt; skill * 3m.</td>
            <td>Works if asleep &lt; skill * 1h.</td>
            <td>Works if asleep &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Cold Beam</td>
            <td>O</td>
            <td>Cold</td>
            <td>2</td>
            <td>Single flying bolt.<br/>1D5+1 (always hits)</td>
            <td>Casting cost 2 SP.</td>
            <td>Casting cost 1 SP.<br/>Faster recovery rate.</td>
            <td>Casting cost 0 SP.<br/>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Protection from Cold</td>
            <td>D</td>
            <td>-</td>
            <td>3</td>
            <td>Increases all character's resistance.<br/>Duration is skill * 1h.</td>
            <td>Skill * 1 resistance.</td>
            <td>Skill * 2 resistance.</td>
            <td>Skill * 3 resistance.</td>
          </tr>
          <tr>
            <td>Poison Spray</td>
            <td>O</td>
            <td>Pois</td>
            <td>4</td>
            <td>Multiple flying shots.<br/>Skill * 1D2 +2 (every shots)</td>
            <td>1 shot.<br/>Moderate recovery rate.</td>
            <td>3 shots.<br/>Faster recovery rate.</td>
            <td>5 shots.<br/>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Water Walk</td>
            <td>U</td>
            <td>-</td>
            <td>5</td>
            <td>Can walk on water without drowning.<br/>1 SP / 20m. Works outdoors only.</td>
            <td>Duration is skill * 5m.</td>
            <td>Duration is skill * 10m.</td>
            <td>Duration is skill * 1h.</td>
          </tr>
          <tr>
            <td>Ice Bolt</td>
            <td>O</td>
            <td>Cold</td>
            <td>8</td>
            <td>Single flying bolt.<br/>Skill * 1D7 damage (always hits)</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Enchant Item</td>
            <td>U</td>
            <td>-</td>
            <td>10</td>
            <td>Imbue a normal item with magical powers.<br/>The chance is skill * 10%.</td>
            <td>Weak enchantments only.</td>
            <td>Stronger enchantments.</td>
            <td>Allows enchantment of weapons.</td>
          </tr>
          <tr>
            <td>Acid Burst</td>
            <td>O</td>
            <td>Pois</td>
            <td>15</td>
            <td>Single flying shot.<br/>Skill * 1D9 + 9 damage (always hits)</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Town Portal</td>
            <td>U</td>
            <td>-</td>
            <td>20</td>
            <td>Teleports the party to the central fountain of towns.<br/>The chance is skill * 10%.</td>
            <td>Outdoors only.</td>
            <td>Indoors OK.</td>
            <td>Gives the choice of destination.</td>
          </tr>
          <tr>
            <td>Ice Blast</td>
            <td>O</td>
            <td>Cold</td>
            <td>25</td>
            <td>Single flying shattering ball.<br/>Skill * 1D2 + 12 (every 7 shards).</td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Lloyd's Beacon</td>
            <td>U</td>
            <td>-</td>
            <td>30</td>
            <td>Set a receiver marker.<br/>Teleports the party to marked point.</td>
            <td>1 Beacon.<br/>Duration is skill * 1h.</td>
            <td>3 Beacons.<br/>Duration is skill * 1d.</td>
            <td>5 Beacons. <br/>Duration is skill * 7d.</td>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Earth Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Stun</td>
            <td>O</td>
            <td>Magic</td>
            <td>1</td>
            <td>Single flying bolt.<br/>Stuns the enemy, and knocks back.</td>
            <td>Normal effect.</td>
            <td>Stronger effect.</td>
            <td>Strongest effect.</td>
          </tr>
          <tr>
            <td>Magic Arrow</td>
            <td>O</td>
            <td>Phys</td>
            <td>2</td>
            <td>Single flying arrow.<br/>1D6+2 damage.</td>
            <td>Casting cost 2 SP.</td>
            <td>Casting cost 1 SP.<br/>Faster recovery rate.</td>
            <td>Casting cost 0 SP.<br/>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Protection from Magic</td>
            <td>D</td>
            <td>-</td>
            <td>3</td>
            <td>Increases all character's resistance.<br/>Duration is skill * 1h.</td>
            <td>Skill * 1 resistance.</td>
            <td>Skill * 2 resistance.</td>
            <td>Skill * 3 resistance.</td>
          </tr>
          <tr>
            <td>Deadly Swarm</td>
            <td>O</td>
            <td>Phys</td>
            <td>4</td>
            <td>Single flying bolt.<br/>1D3 + 5 damage (always hits).</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Stone Skin</td>
            <td>D</td>
            <td>-</td>
            <td>5</td>
            <td>Skill + 5 AC.</td>
            <td>Duration is skill * 5m +1h.</td>
            <td>Affects entire party.</td>
            <td>Skill *15 m +1h.</td>
          </tr>
          <tr>
            <td>Blades</td>
            <td>O</td>
            <td>Phys</td>
            <td>8</td>
            <td>Single flying bolt.<br/>Skill * 1D5 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Stone to Flesh</td>
            <td>H</td>
            <td>-</td>
            <td>10</td>
            <td>Removes the stoned condition.</td>
            <td>Works if stoned &lt; skill * 3m.</td>
            <td>Works if stoned &lt; skill * 1h.</td>
            <td>Works if stoned &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Rock Blast</td>
            <td>O</td>
            <td>Phys</td>
            <td>15</td>
            <td>Single flying exploding rock.<br/>Skill * 1D8 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Turn to Stone</td>
            <td>O</td>
            <td>Magic</td>
            <td>20</td>
            <td>Single flying bolt. Turning is temporarily.<br/>The statues are invulnerable.</td>
            <td>Duration is skill * 5m.</td>
            <td>Duration is skill * 10m.</td>
            <td>Duration is skill * 20m.</td>
          </tr>
          <tr>
            <td>Death Blossom</td>
            <td>O</td>
            <td>Phys</td>
            <td>25</td>
            <td>Single falling rock. Works outdoors only.<br/>Skill + 20 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Larger radius.<br/>Faster recovery.</td>
            <td>Largest radius.<br/>Fastest recovery.</td>
          </tr>
          <tr>
            <td>Mass Distortion</td>
            <td>O</td>
            <td>Magic</td>
            <td>30</td>
            <td>Single flying bolt.<br/>Skill * 2% + 25% of hit points damage.</td>
            <td>Slow rate of recovery.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Spirit Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Spirit Arrow</td>
            <td>O</td>
            <td>Magic</td>
            <td>1</td>
            <td>Single flying bolt.<br/>1D6 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Casting cost 0 SP.</td>
          </tr>
          <tr>
            <td>Bless</td>
            <td>U</td>
            <td>-</td>
            <td>2</td>
            <td>Increases the attack value.<br/>Skill + 5 to hit.</td>
            <td>Duration is skill * 5m + 1h.</td>
            <td>Affects entire party.</td>
            <td>Duration is skill * 15m + 1h.</td>
          </tr>
          <tr>
            <td>Healing Touch</td>
            <td>H</td>
            <td>-</td>
            <td>3</td>
            <td>Heals a single character.</td>
            <td>1D5 + 2 HP.</td>
            <td>1D5 + 4 HP.</td>
            <td>1D5 + 6 HP.</td>
          </tr>
          <tr>
            <td>Lucky Day</td>
            <td>U</td>
            <td>-</td>
            <td>4</td>
            <td>Increases the luck value.<br/>Duration is skill * 1h.</td>
            <td>Skill * 2 + 10 value.</td>
            <td>Skill * 3 + 10 value.</td>
            <td>Affects entire party.</td>
          </tr>
          <tr>
            <td>Remove Curse</td>
            <td>H</td>
            <td>-</td>
            <td>5</td>
            <td>Removes the cursed condition.</td>
            <td>Works if cursed &lt; skill * 3m.</td>
            <td>Works if cursed &lt; skill * 1h.</td>
            <td>Works if cursed &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Guardian Angel</td>
            <td>U</td>
            <td>-</td>
            <td>8</td>
            <td>When the party died, half money will loose only.<br/>Affects entire party. Duration is skill * 1h.</td>
            <td>Party is restored with 1 HP.</td>
            <td>Party is restored with half HP.</td>
            <td>Party is restored with full HP.</td>
          </tr>
          <tr>
            <td>Heroism</td>
            <td>U</td>
            <td>-</td>
            <td>10</td>
            <td>Increases the damage value.<br/>Skill + 5 to damage.</td>
            <td>Duration is skill * 5m + 1h.</td>
            <td>Affects entire party.</td>
            <td>Duration is skill * 15m + 1h.</td>
          </tr>
          <tr>
            <td>Turn Undead</td>
            <td>O</td>
            <td>Magic</td>
            <td>15</td>
            <td>Forces all visible undeads to flee.
              <br/>Duration is skill * 3m +3m.
            </td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Raise Dead</td>
            <td>H</td>
            <td>-</td>
            <td>20</td>
            <td>Removes the dead condition.<br/>Causes weakness.</td>
            <td>Works if dead &lt; skill * 3m.</td>
            <td>Works if dead &lt; skill * 1h.</td>
            <td>Works if dead &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Shared Life</td>
            <td>H</td>
            <td>-</td>
            <td>25</td>
            <td>All current hit points are totaled,<br/>and distributed back to the characters.</td>
            <td>Total HP + Skill<br/>for distribution</td>
            <td>Total HP + Skill * 2 HP<br/>for distribution</td>
            <td>Total HP + Skill * 3 HP<br/>for distribution</td>
          </tr>
          <tr>
            <td>Resurrection</td>
            <td>H</td>
            <td>-</td>
            <td>30</td>
            <td>Removes the eradicated condition.<br/>Causes weakness.</td>
            <td>Works if eradicated &lt; skill * 3m.</td>
            <td>Works if eradicated &lt; skill * 1h.</td>
            <td>Works if eradicated &lt; skill * 1d.</td>
          </tr>
          <tr>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Mind Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Meditation</td>
            <td>U</td>
            <td>-</td>
            <td>1</td>
            <td>Increases the intellect and personality value.<br/>Duration is sSkill * 1h.</td>
            <td>Skill * 2 + 10 value.</td>
            <td>Skill * 3 + 10 value.</td>
            <td>Affects entire party.</td>
          </tr>
          <tr>
            <td>Remove Fear</td>
            <td>H</td>
            <td>-</td>
            <td>2</td>
            <td>Removes the afraid condition.</td>
            <td>Works if afraid &lt; skill * 3m.</td>
            <td>Works if afraid &lt; skill * 1h.</td>
            <td>Works if afraid &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Mind Blast</td>
            <td>O</td>
            <td>Magic</td>
            <td>3</td>
            <td>Single flying bolt.<br/>Skill * 1D2 + 5 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Precision</td>
            <td>U</td>
            <td>-</td>
            <td>4</td>
            <td>Increases the accuracy value.<br/>Duration is skill * 1h.</td>
            <td>Skill * 2 + 10 value.</td>
            <td>Skill * 3 + 10 value.</td>
            <td>Affects entire party.</td>
          </tr>
          <tr>
            <td>Cure Paralysis</td>
            <td>H</td>
            <td>-</td>
            <td>5</td>
            <td>Removes the paralyzed condition.</td>
            <td>Works if paralyzed &lt; skill * 3m.</td>
            <td>Works if paralyzed &lt; skill * 1h.</td>
            <td>Works if paralyzed &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Charm</td>
            <td>O</td>
            <td>Magic</td>
            <td>8</td>
            <td>Calm single enemy.<br/>If takes any damage, will hostile again.</td>
            <td>Duration is skill * 3m.</td>
            <td>Duration is skill * 6m.</td>
            <td>Duration is skill * 12m.</td>
          </tr>
          <tr>
            <td>Mass Fear</td>
            <td>O</td>
            <td>Magic</td>
            <td>10</td>
            <td>Forces all visible enemy to flee.<br/>Duration is skill * 3m. Don't work on undeads.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Feeblemind</td>
            <td>O</td>
            <td>Magic</td>
            <td>15</td>
            <td>Removes casting ability temporarily.<br/>Duration is skill * 5m. Don't work against ranged bolts.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Cure Insanity</td>
            <td>H</td>
            <td>-</td>
            <td>20</td>
            <td>Removes the insane condition.<br/>Causes weakness.</td>
            <td>Works if insane &lt; skill * 3m.</td>
            <td>Works if insane &lt; skill * 1h.</td>
            <td>Works if insane &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Psychic Shock</td>
            <td>O</td>
            <td>Magic</td>
            <td>25</td>
            <td>Single flying bolt.<br/>Skill * 1D12 + 12 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Telekinesis</td>
            <td>U</td>
            <td>-</td>
            <td>30</td>
            <td>Manipulates an object at a distance.</td>
            <td>Strength of effect is skill.</td>
            <td>Strength of effect is skill * 2.</td>
            <td>Strength of effect is skill * 3.</td>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Body Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Cure Weakness</td>
            <td>H</td>
            <td>-</td>
            <td>1</td>
            <td>Removes the weak condition.</td>
            <td>Works if weak &lt; skill * 3m.</td>
            <td>Works if weak &lt; skill * 1h.</td>
            <td>Works if weak &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>First Aid</td>
            <td>H</td>
            <td>-</td>
            <td>2</td>
            <td>Heals a single character.<br/>Recovery is reduced by skill.</td>
            <td>5 HP.</td>
            <td>7 HP.</td>
            <td>10 HP.</td>
          </tr>
          <tr>
            <td>Protection from Poison</td>
            <td>D</td>
            <td>-</td>
            <td>3</td>
            <td>Increases all character's resistance.<br/>Duration is skill * 1h.</td>
            <td>Skill * 1 resistance.</td>
            <td>Skill * 2 resistance.</td>
            <td>Skill * 3 resistance.</td>
          </tr>
          <tr>
            <td>Harm</td>
            <td>O</td>
            <td>Magic</td>
            <td>4</td>
            <td>Single flying bolt.<br/>Skill * 1D2 + 8 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Cure Wounds</td>
            <td>H</td>
            <td>-</td>
            <td>5</td>
            <td>Heals a single character.<br/>Skill * 2 + 5 HP.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Cure Poison</td>
            <td>H</td>
            <td>-</td>
            <td>8</td>
            <td>Removes the posined condition.</td>
            <td>Works if poisoned &lt; skill * 3m.</td>
            <td>Works if poisoned &lt; skill * 1h.</td>
            <td>Works if poisoned &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>U</td>
            <td>-</td>
            <td>10</td>
            <td>Increases the speed value.<br/>Duration is skill * 1h.</td>
            <td>Skill * 2 + 10 value.</td>
            <td>Skill * 3 + 10 value.</td>
            <td>Affects entire party.</td>
          </tr>
          <tr>
            <td>Cure Disease</td>
            <td>H</td>
            <td>-</td>
            <td>15</td>
            <td>Removes the diseased condition.</td>
            <td>Works if diseased &lt; skill * 3m.</td>
            <td>Works if diseased &lt; skill * 1h.</td>
            <td>Works if diseased &lt; skill * 1d.</td>
          </tr>
          <tr>
            <td>Power</td>
            <td>U</td>
            <td>-</td>
            <td>20</td>
            <td>Increases the strength value.<br/>Duration is skill * 1h.</td>
            <td>Skill * 2 + 10 value.</td>
            <td>Skill * 3 + 10 value.</td>
            <td>Affects entire party.</td>
          </tr>
          <tr>
            <td>Flying Fist</td>
            <td>O</td>
            <td>Magic</td>
            <td>25</td>
            <td>Single flying bolt.<br/>Skill * 1D5 + 30 damage.</td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Power Cure</td>
            <td>H</td>
            <td>-</td>
            <td>30</td>
            <td>Heals the party.<br/>Skill * 2 + 10 HP.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Light Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Create Food</td>
            <td>U</td>
            <td>-</td>
            <td>20</td>
            <td>Creates food for party, if have less<br/>real food than would be created.</td>
            <td>Skill / 10 + 1 food.</td>
            <td>Skill * 2 / 10 + 1 food.</td>
            <td>Skill * 3 / 10 + 1 food.</td>
          </tr>
          <tr>
            <td>Golden Touch</td>
            <td>U</td>
            <td>-</td>
            <td>25</td>
            <td>Converts a single item into gold equal.<br/>The chance is skill * 10%.</td>
            <td>Item to 40% gold value.</td>
            <td>Item to 60% gold value.</td>
            <td>Item to 80% gold value.</td>
          </tr>
          <tr>
            <td>Dispel Magic</td>
            <td>H</td>
            <td>-</td>
            <td>30</td>
            <td>Removes all spells on the party.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Slow</td>
            <td>O</td>
            <td>Magic</td>
            <td>35</td>
            <td>Halves the speed and the attacking rate<br/>of a single enemy. Duration is skill * 3m.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Destroy Undead</td>
            <td>O</td>
            <td>Magic</td>
            <td>40</td>
            <td>Single flying bolt. Works on undead only.<br/>Skill * 1d16 + 16 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Day of the Gods</td>
            <td>U</td>
            <td>-</td>
            <td>45</td>
            <td>Power, Meditation, Speed, Lucky Day, Precision,<br/>GA on party. Increases main values. Duration is skill
              *
              2h.</td>
            <td>Effects increase with skill * 2.</td>
            <td>Effects increase with skill * 3.</td>
            <td>Effects increase with skill * 4.</td>
          </tr>
          <tr>
            <td>Prismatic Light</td>
            <td>O</td>
            <td>Magic</td>
            <td>50</td>
            <td>Hurts all monsters in sight. Works indoors only.<br/>Skill + 25 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Hour of Power</td>
            <td>U</td>
            <td>-</td>
            <td>55</td>
            <td>Haste, Heroism, Shield, Stone Skin,<br/>Bless on party. Duration is skill * 2h.</td>
            <td>Effects increase with skill * 2.</td>
            <td>Effects increase with skill * 3.</td>
            <td>Effects increase with skill * 4.</td>
          </tr>
          <tr>
            <td>Paralyze</td>
            <td>O</td>
            <td>Magic</td>
            <td>60</td>
            <td>Single flying bolt.<br/>Duration is skill * 3m. The monsters cannot retaliate.</td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Sun Ray</td>
            <td>O</td>
            <td>Fire</td>
            <td>65</td>
            <td>Single fying bolt. Skill * 1D20 + 20.<br/>It can only work outdoors and during the day</td>
            <td>Very slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Divine Intervention</td>
            <td>H</td>
            <td>-</td>
            <td>70</td>
            <td>Restores the party. Aging the caster 10 years.<br/>Works on rising or setting of the sun only.</td>
            <td>Works once per day only.</td>
            <td>Works twice per day only.</td>
            <td>Works three times per day only.</td>
          </tr>
          </tbody>
        </table>
        <table className="center-table">
          <colgroup>
            <col className="left" />
              <col span="3" className="center" />
                <col span="4" className="left" />
          </colgroup>
          <tbody>
          <tr>
            <th className="center">Light Spells</th>
            <th>Type</th>
            <th>Resist</th>
            <th>Mana</th>
            <th className="center">Description</th>
            <th className="center">Normal</th>
            <th className="center">Expert</th>
            <th className="center">Master</th>
          </tr>
          <tr>
            <td>Reanimate</td>
            <td>U</td>
            <td>-</td>
            <td>20</td>
            <td>Raises a lifeless creature from the dead.</td>
            <td>Skill * 10 HP (up to max.)</td>
            <td>Skill * 20 HP (up to max.)</td>
            <td>Skill * 30 HP (up to max.)</td>
          </tr>
          <tr>
            <td>Toxic Cloud</td>
            <td>O</td>
            <td>Pois</td>
            <td>30</td>
            <td>Single flying bolt.<br/>Skill * 1D10 +25 damage.</td>
            <td>Moderate recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Mass Curse</td>
            <td>O</td>
            <td>Magic</td>
            <td>40</td>
            <td>Curses all monsters in sight.</td>
            <td>Duration is skill * 2m.</td>
            <td>Duration is skill * 3m.</td>
            <td>Duration is skill * 4m.</td>
          </tr>
          <tr>
            <td>Shrapmetal</td>
            <td>O</td>
            <td>Phys</td>
            <td>50</td>
            <td>Multiple flying fragments.<br/>Skill * 1D6 + damage (every shots).</td>
            <td>3 fragments.<br/>Moderate recovery rate.</td>
            <td>5 fragments.<br/>Faster recovery rate.</td>
            <td>7 fragments.<br/>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Shrinking Ray</td>
            <td>O</td>
            <td>Magic</td>
            <td>60</td>
            <td>Single flying bolt. Duration is skill * 5m.<br/>A shrunken monster can cause less damage.</td>
            <td>Reducing to one half normal.</td>
            <td>Reducing to one third normal.</td>
            <td>Reducing to one fourth normal.</td>
          </tr>
          <tr>
            <td>Day of Protection</td>
            <td>D</td>
            <td>-</td>
            <td>70</td>
            <td>Protection from Fire, Electricity, Cold, Poison,<br/>Magic, Feather Fall, Wizard Eye on party.</td>
            <td>Effects increase with skill * 2.</td>
            <td>Effects increase with skill * 3.</td>
            <td>Effects increase with skill * 4.</td>
          </tr>
          <tr>
            <td>Finger of Death</td>
            <td>O</td>
            <td>Magic</td>
            <td>80</td>
            <td>Single flying bolt<br/>Slay a single creature.</td>
            <td>The chance is skill * 3%.</td>
            <td>The chance is skill * 4%.</td>
            <td>The chance is skill * 5%.</td>
          </tr>
          <tr>
            <td>Moon Ray</td>
            <td>O</td>
            <td>Magic</td>
            <td>90</td>
            <td>Heals the party and damages all monsters in sight.<br/>Outdoors works at night only. Skill * 1D4
              damage/HP.
            </td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Dragon Breath</td>
            <td>O</td>
            <td>Pois</td>
            <td>100</td>
            <td>Single flying bolt.<br/>Skill * 1D25 damage.</td>
            <td>Slow recovery rate.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          <tr>
            <td>Armageddon</td>
            <td>O</td>
            <td>Magic</td>
            <td>150</td>
            <td>Hurts everybody, the party too.<br/>Skill + 50 damage. Outdoors works only.</td>
            <td>Works once per day only.</td>
            <td>Works twice per day only.</td>
            <td>Works three times per day only.</td>
          </tr>
          <tr>
            <td>Dark Containment</td>
            <td>O</td>
            <td>Magic</td>
            <td>200</td>
            <td>Single flying exploding bolt.<br/>Causes random effects.</td>
            <td>Slow rate of recovery.</td>
            <td>Faster recovery rate.</td>
            <td>Fastest recovery rate.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <section id="tm">
        <h2>Monsters</h2>
        <p>The key for the spells column below:
          <br/><code>N </code>= Normal level spells
            <br/><code>E </code>= Expert level spells
              <br/><code>M </code>= Master level spells
        </p>
        <table id="m_hufig" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Humanoids</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist</th>
          </tr>
          <tr>
            <td>Human Fighters</td>
            <td>Cannibal</td>
            <td>6</td>
            <td>21</td>
            <td>5</td>
            <td>96</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D3+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Head Hunter</td>
            <td>8</td>
            <td>30</td>
            <td>7</td>
            <td>144</td>
            <td>Weak</td>
            <td>Phys</td>
            <td>3D3+4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Witch Doctor</td>
            <td>10</td>
            <td>40</td>
            <td>9</td>
            <td>200</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D3+6</td>
            <td>-</td>
            <td>-</td>
            <td>N2 Deadly Swarm</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Thug</td>
            <td>8</td>
            <td>30</td>
            <td>12</td>
            <td>144</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Ruffian</td>
            <td>14</td>
            <td>61</td>
            <td>14</td>
            <td>336</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+5</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Brigand</td>
            <td>22</td>
            <td>114</td>
            <td>16</td>
            <td>704</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+10</td>
            <td>Phys</td>
            <td>2D4+20</td>
            <td>-</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td>Archer</td>
            <td>9</td>
            <td>35</td>
            <td>14</td>
            <td>171</td>
            <td>-</td>
            <td>Phys</td>
            <td>1D6+1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Master Archer</td>
            <td>19</td>
            <td>93</td>
            <td>16</td>
            <td>551</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D6+2</td>
            <td>Fire</td>
            <td>3D6</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Fire Archer</td>
            <td>29</td>
            <td>171</td>
            <td>22</td>
            <td>1131</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D6+3</td>
            <td>Fire</td>
            <td>4D6</td>
            <td>N5 Fireball</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Swordsman</td>
            <td>10</td>
            <td>40</td>
            <td>10</td>
            <td>200</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td>Expert Swordsman</td>
            <td>17</td>
            <td>79</td>
            <td>15</td>
            <td>459</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td>Master Swordsman</td>
            <td>24</td>
            <td>129</td>
            <td>20</td>
            <td>816</td>
            <td>BrkWeapon</td>
            <td>Phys</td>
            <td>3D7+8</td>
            <td>Phys</td>
            <td>3D7+20</td>
            <td>-</td>
            <td>15</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Guard</td>
            <td>11</td>
            <td>45</td>
            <td>16</td>
            <td>231</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D3+5</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td>Lieutenant</td>
            <td>19</td>
            <td>93</td>
            <td>24</td>
            <td>551</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D3+10</td>
            <td>Phys</td>
            <td>3D3+20</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Captain</td>
            <td>33</td>
            <td>207</td>
            <td>32</td>
            <td>1419</td>
            <td>BrkArmor</td>
            <td>Phys</td>
            <td>3D3+20</td>
            <td>Phys</td>
            <td>3D3+40</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Fighter</td>
            <td>14</td>
            <td>61</td>
            <td>18</td>
            <td>336</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D3+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Soldier</td>
            <td>24</td>
            <td>129</td>
            <td>24</td>
            <td>816</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D3+10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>10</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Veteran</td>
            <td>35</td>
            <td>227</td>
            <td>30</td>
            <td>1575</td>
            <td>BrkWeapon</td>
            <td>Phys</td>
            <td>3D3+14</td>
            <td>Phys</td>
            <td>3D3+45</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>10</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Magyar</td>
            <td>14</td>
            <td>61</td>
            <td>16</td>
            <td>336</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+3</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>-</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Magyar Soldier</td>
            <td>25</td>
            <td>137</td>
            <td>22</td>
            <td>875</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+6</td>
            <td>Phys</td>
            <td>3D7+18</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>-</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Magyar Matron</td>
            <td>37</td>
            <td>247</td>
            <td>28</td>
            <td>1739</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+12</td>
            <td>Elec</td>
            <td>7D8</td>
            <td>-</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>-</td>
            <td>30</td>
          </tr>
          <tr>
          </tr>
          </tbody>
        </table>
        <table id="m_huthi" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Humanoids</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Human Thieves</td>
            <td>Cutpurse</td>
            <td>3</td>
            <td>9</td>
            <td>3</td>
            <td>39</td>
            <td>Steal</td>
            <td>Phys</td>
            <td>2D2+3</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Bounty Hunter</td>
            <td>5</td>
            <td>17</td>
            <td>5</td>
            <td>75</td>
            <td>Steal</td>
            <td>Phys</td>
            <td>2D2+5</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Assassin</td>
            <td>7</td>
            <td>25</td>
            <td>10</td>
            <td>119</td>
            <td>Dead</td>
            <td>Phys</td>
            <td>2D2+10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Thief</td>
            <td>8</td>
            <td>30</td>
            <td>10</td>
            <td>144</td>
            <td>Steal</td>
            <td>Phys</td>
            <td>3D4+3</td>
            <td>Phys</td>
            <td>3D4+1</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Burglar</td>
            <td>12</td>
            <td>50</td>
            <td>14</td>
            <td>264</td>
            <td>Steal</td>
            <td>Phys</td>
            <td>3D4+6</td>
            <td>Phys</td>
            <td>3D4+3</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Rogue</td>
            <td>18</td>
            <td>86</td>
            <td>20</td>
            <td>504</td>
            <td>Steal</td>
            <td>Phys</td>
            <td>3D4+12</td>
            <td>Phys</td>
            <td>3D4+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Rogue Leader</span></td>
            <td>25</td>
            <td>133</td>
            <td>20</td>
            <td>0</td>
            <td>Steal</td>
            <td>Phys</td>
            <td>2D10+12</td>
            <td>Magic</td>
            <td>3D4+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
        <table id="m_hucle" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Humanoids</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Human Clerics</td>
            <td>Follower of Baa</td>
            <td>3</td>
            <td>9</td>
            <td>3</td>
            <td>39</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Mystic of Baa</td>
            <td>5</td>
            <td>17</td>
            <td>5</td>
            <td>75</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+2</td>
            <td>-</td>
            <td>-</td>
            <td>N1 Mind Blast</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Fanatic of Baa</td>
            <td>7</td>
            <td>25</td>
            <td>6</td>
            <td>119</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Acolyte of Baa</td>
            <td>8</td>
            <td>30</td>
            <td>14</td>
            <td>144</td>
            <td>-</td>
            <td>Elec</td>
            <td>2D4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Cleric of Baa</td>
            <td>15</td>
            <td>67</td>
            <td>18</td>
            <td>375</td>
            <td>-</td>
            <td>Elec</td>
            <td>2D4+4</td>
            <td>-</td>
            <td>-</td>
            <td>N3 Harm</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Priest of Baa</td>
            <td>25</td>
            <td>137</td>
            <td>22</td>
            <td>875</td>
            <td>-</td>
            <td>Elec</td>
            <td>2D4+8</td>
            <td>-</td>
            <td>-</td>
            <td>N5 Flying Fist</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Slicker Silvertongue</span></td>
            <td>25</td>
            <td>137</td>
            <td>22</td>
            <td>875</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Novice Monk</td>
            <td>8</td>
            <td>30</td>
            <td>16</td>
            <td>144</td>
            <td>-</td>
            <td>Fire</td>
            <td>2D4+2</td>
            <td>-</td>
            <td>-</td>
            <td>N2 Fire Bolt</td>
            <td>10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Initiate Monk</td>
            <td>16</td>
            <td>73</td>
            <td>19</td>
            <td>416</td>
            <td>-</td>
            <td>Elec</td>
            <td>2D4+8</td>
            <td>-</td>
            <td>-</td>
            <td>N3 Lightning Bolt</td>
            <td>-</td>
            <td>10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Master Monk</td>
            <td>27</td>
            <td>153</td>
            <td>28</td>
            <td>999</td>
            <td>Weak</td>
            <td>Cold</td>
            <td>2D4+16</td>
            <td>-</td>
            <td>-</td>
            <td>M6 Ice Bolt</td>
            <td>5</td>
            <td>5</td>
            <td>20</td>
            <td>5</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Druid</td>
            <td>10</td>
            <td>40</td>
            <td>12</td>
            <td>200</td>
            <td>-</td>
            <td>Fire</td>
            <td>2D4+3</td>
            <td>-</td>
            <td>-</td>
            <td>N2 Harm</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Great Druid</td>
            <td>16</td>
            <td>73</td>
            <td>16</td>
            <td>416</td>
            <td>-</td>
            <td>Cold</td>
            <td>2D4+6</td>
            <td>-</td>
            <td>-</td>
            <td>N3 Deadly Swarm</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Grand Druid</td>
            <td>28</td>
            <td>162</td>
            <td>22</td>
            <td>1064</td>
            <td>DrainSP</td>
            <td>Magic</td>
            <td>2D4+12</td>
            <td>-</td>
            <td>-</td>
            <td>M6 Fireball</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
        <table id="m_humag" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Humanoids</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Human Mages</td>
            <td>Apprentice Mage</td>
            <td>2</td>
            <td>6</td>
            <td>3</td>
            <td>24</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4</td>
            <td>-</td>
            <td>-</td>
            <td>N1 Flame Arrow</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Journeyman Mage</td>
            <td>6</td>
            <td>21</td>
            <td>5</td>
            <td>96</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+2</td>
            <td>-</td>
            <td>-</td>
            <td>N1 Cold Beam</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Mage</td>
            <td>10</td>
            <td>40</td>
            <td>7</td>
            <td>200</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D4+6</td>
            <td>-</td>
            <td>-</td>
            <td>N2 Lightning Bolt</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Sorcerer</td>
            <td>25</td>
            <td>137</td>
            <td>14</td>
            <td>875</td>
            <td>-</td>
            <td>Elec</td>
            <td>9D4</td>
            <td>-</td>
            <td>-</td>
            <td>M8 Lightning Bolt</td>
            <td>10</td>
            <td>Imm</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Magician</td>
            <td>35</td>
            <td>227</td>
            <td>18</td>
            <td>1575</td>
            <td>-</td>
            <td>Elec</td>
            <td>12D4</td>
            <td>-</td>
            <td>-</td>
            <td>M12 Lightning Bolt</td>
            <td>20</td>
            <td>Imm</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Warlock</td>
            <td>50</td>
            <td>400</td>
            <td>30</td>
            <td>3000</td>
            <td>Insane</td>
            <td>Ener</td>
            <td>16D4</td>
            <td>-</td>
            <td>-</td>
            <td>M16 Lightning Bolt</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Q</span></td>
            <td>100</td>
            <td>16000</td>
            <td>60</td>
            <td>75</td>
            <td>-</td>
            <td>Magic</td>
            <td>10D5+2</td>
            <td>Magic</td>
            <td>10D5+2</td>
            <td>N10 Finger of Death</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
        <table id="m_hunoi" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Humanoids</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Lizards</td>
            <td>Lizard Man</td>
            <td>4</td>
            <td>13</td>
            <td>10</td>
            <td>56</td>
            <td>-</td>
            <td>Phys</td>
            <td>1D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Lizard Archer</td>
            <td>7</td>
            <td>25</td>
            <td>15</td>
            <td>119</td>
            <td>-</td>
            <td>Phys</td>
            <td>1D6+2</td>
            <td>Fire</td>
            <td>2D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Lizard Wizard</td>
            <td>11</td>
            <td>45</td>
            <td>20</td>
            <td>231</td>
            <td>-</td>
            <td>Phys</td>
            <td>1D6+5</td>
            <td>-</td>
            <td>-</td>
            <td>N2 Lightning Bolt</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Goblins</td>
            <td>Goblin</td>
            <td>4</td>
            <td>13</td>
            <td>6</td>
            <td>56</td>
            <td>-</td>
            <td>Phys</td>
            <td>1D9</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Goblin Shaman</td>
            <td>6</td>
            <td>21</td>
            <td>10</td>
            <td>96</td>
            <td>-</td>
            <td>Phys</td>
            <td>1D9+2</td>
            <td>-</td>
            <td>-</td>
            <td>N1 Fire Bolt</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Goblin King</td>
            <td>10</td>
            <td>40</td>
            <td>14</td>
            <td>200</td>
            <td>BrkItem</td>
            <td>Phys</td>
            <td>1D9+4</td>
            <td>-</td>
            <td>-</td>
            <td>N2 Fire Bolt</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Dwarves</td>
            <td>Dwarf</td>
            <td>10</td>
            <td>40</td>
            <td>6</td>
            <td>200</td>
            <td>-</td>
            <td>Phys</td>
            <td>4D2+4</td>
            <td>Phys</td>
            <td>8D2+8</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Dwarf Warrior</td>
            <td>20</td>
            <td>100</td>
            <td>12</td>
            <td>600</td>
            <td>-</td>
            <td>Phys</td>
            <td>4D2+8</td>
            <td>Phys</td>
            <td>8D2+16</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>Imm</td>
            <td>40</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Dwarf Lord</td>
            <td>30</td>
            <td>180</td>
            <td>20</td>
            <td>1200</td>
            <td>BrkArmor</td>
            <td>Phys</td>
            <td>4D2+16</td>
            <td>Phys</td>
            <td>8D2+32</td>
            <td>-</td>
            <td>40</td>
            <td>40</td>
            <td>40</td>
            <td>Imm</td>
            <td>50</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td id="mu_Snergle"><span className="red">Snergle</span></td>
            <td>27</td>
            <td>150</td>
            <td>20</td>
            <td>0</td>
            <td>BrkArmor</td>
            <td>Phys</td>
            <td>4D2+10</td>
            <td>Magic</td>
            <td>8D2+20</td>
            <td>-</td>
            <td>40</td>
            <td>40</td>
            <td>40</td>
            <td>Imm</td>
            <td>-</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Ogres</td>
            <td>Ogre</td>
            <td>15</td>
            <td>67</td>
            <td>12</td>
            <td>375</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D5+10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Ogre Raider</td>
            <td>20</td>
            <td>100</td>
            <td>14</td>
            <td>600</td>
            <td>-</td>
            <td>Phys</td>
            <td>2D5+15</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Ogre Chieftain</td>
            <td>28</td>
            <td>162</td>
            <td>16</td>
            <td>1064</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>2D5+25</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Minotaurs</td>
            <td>Minotaur</td>
            <td>39</td>
            <td>269</td>
            <td>30</td>
            <td>1911</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+25</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Minotaur Mage</td>
            <td>59</td>
            <td>525</td>
            <td>35</td>
            <td>4071</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+40</td>
            <td>-</td>
            <td>-</td>
            <td>M12 Lightning Bolt</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Minotaur King</td>
            <td>79</td>
            <td>861</td>
            <td>40</td>
            <td>7031</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+60</td>
            <td>-</td>
            <td>-</td>
            <td>N14 Finger of Death</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Lurch</span></td>
            <td>85</td>
            <td>2000</td>
            <td>40</td>
            <td>7031</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D7+60</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>Imm</td>
          </tr>
          <tr>
            <td>Jackalmen</td>
            <td>Defender of VARN</td>
            <td>35</td>
            <td>227</td>
            <td>40</td>
            <td>1575</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D6+20</td>
            <td>Ener</td>
            <td>5D6</td>
            <td>M7 Psychic Shock</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Sentinel of VARN</td>
            <td>55</td>
            <td>467</td>
            <td>50</td>
            <td>3575</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D6+35</td>
            <td>Ener</td>
            <td>6D6</td>
            <td>M11 Psychic Shock</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>Imm</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Guardian of VARN</td>
            <td>65</td>
            <td>617</td>
            <td>60</td>
            <td>4875</td>
            <td>BrkWeapon</td>
            <td>Phys</td>
            <td>3D6+50</td>
            <td>Ener</td>
            <td>8D6</td>
            <td>M13 Psychic Shock</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Fallen Defender</span></td>
            <td>35</td>
            <td>227</td>
            <td>40</td>
            <td>0</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D6+20</td>
            <td>Ener</td>
            <td>5D6+0</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>0</td>
            <td>Imm</td>
          </tr>
          <tr>
            <td>Titans</td>
            <td>Titan</td>
            <td>65</td>
            <td>617</td>
            <td>60</td>
            <td>4875</td>
            <td>BrkItem</td>
            <td>Elec</td>
            <td>2D20+60</td>
            <td>-</td>
            <td>-</td>
            <td>M15 Psychic Shock</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Noble Titan</td>
            <td>75</td>
            <td>787</td>
            <td>70</td>
            <td>6375</td>
            <td>BrkItem</td>
            <td>Elec</td>
            <td>2D20+80</td>
            <td>-</td>
            <td>-</td>
            <td>M18 Psychic Shock</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Supreme Titan</td>
            <td>95</td>
            <td>1187</td>
            <td>80</td>
            <td>9975</td>
            <td>Dead</td>
            <td>Elec</td>
            <td>2D20+120</td>
            <td>-</td>
            <td>-</td>
            <td>M25 Psychic Shock</td>
            <td>80</td>
            <td>Imm</td>
            <td>80</td>
            <td>80</td>
            <td>Imm</td>
            <td>80</td>
          </tr>
          </tbody>
        </table>
        <table id="m_beas1" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Beasts</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Rats</td>
            <td>Common Rat</td>
            <td>2</td>
            <td>6</td>
            <td>4</td>
            <td>24</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>1D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Large Rat</td>
            <td>4</td>
            <td>13</td>
            <td>5</td>
            <td>56</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>1D8+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Giant Rat</td>
            <td>6</td>
            <td>21</td>
            <td>8</td>
            <td>96</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>1D8+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Suckers</td>
            <td>Blood Sucker</td>
            <td>2</td>
            <td>6</td>
            <td>6</td>
            <td>24</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>1D2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Brain Sucker</td>
            <td>4</td>
            <td>13</td>
            <td>8</td>
            <td>56</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>1D2+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Soul Sucker</td>
            <td>8</td>
            <td>30</td>
            <td>10</td>
            <td>144</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D2+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Bats</td>
            <td>Bat</td>
            <td>3</td>
            <td>9</td>
            <td>5</td>
            <td>39</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>1D3</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Giant Bat</td>
            <td>6</td>
            <td>21</td>
            <td>8</td>
            <td>96</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>1D3+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Vampire Bat</td>
            <td>9</td>
            <td>35</td>
            <td>10</td>
            <td>171</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D3+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Spiders</td>
            <td>Spider</td>
            <td>5</td>
            <td>17</td>
            <td>10</td>
            <td>75</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>3D2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Giant Spider</td>
            <td>8</td>
            <td>30</td>
            <td>12</td>
            <td>144</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>3D2+3</td>
            <td>Pois</td>
            <td>3D2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Huge Spider</td>
            <td>12</td>
            <td>50</td>
            <td>16</td>
            <td>264</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>3D2+6</td>
            <td>Pois</td>
            <td>4D2</td>
            <td>-</td>
            <td>-</td>
            <td>5</td>
            <td>5</td>
            <td>Imm</td>
            <td>5</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>font color=cc0000&gt;Queen Spider</td>
            <td>12</td>
            <td>50</td>
            <td>16</td>
            <td>0</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>3D2+6</td>
            <td>Pois</td>
            <td>4D2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Snakes</td>
            <td>Cobra</td>
            <td>5</td>
            <td>17</td>
            <td>10</td>
            <td>75</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>1D3+6</td>
            <td>Pois</td>
            <td>2D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>King Cobra</td>
            <td>10</td>
            <td>40</td>
            <td>12</td>
            <td>200</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>2D3+6</td>
            <td>Pois</td>
            <td>3D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Queen Cobra</td>
            <td>14</td>
            <td>61</td>
            <td>16</td>
            <td>336</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>3D3+6</td>
            <td>Pois</td>
            <td>4D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ooozes</td>
            <td>Ooze</td>
            <td>12</td>
            <td>50</td>
            <td>8</td>
            <td>264</td>
            <td>Poison</td>
            <td>Pois</td>
            <td>1D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
          </tr>
          <tr>
            <td></td>
            <td>Acidic Ooze</td>
            <td>18</td>
            <td>86</td>
            <td>10</td>
            <td>504</td>
            <td>BrkItem</td>
            <td>Pois</td>
            <td>3D6</td>
            <td>-</td>
            <td>-</td>
            <td>N4 Poison Spray</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
          </tr>
          <tr>
            <td></td>
            <td>Corrosive Ooze</td>
            <td>25</td>
            <td>137</td>
            <td>12</td>
            <td>875</td>
            <td>BrkItem</td>
            <td>Pois</td>
            <td>5D6</td>
            <td>-</td>
            <td>-</td>
            <td>M5 Toxic Cloud</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
          </tr>
          <tr>
            <td>Cockatrices</td>
            <td>Agar's Pet</td>
            <td>13</td>
            <td>55</td>
            <td>13</td>
            <td>299</td>
            <td>Paralyze</td>
            <td>Phys</td>
            <td>1D12</td>
            <td>-</td>
            <td>-</td>
            <td>N10 Mind Blast</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Agar's Monster</td>
            <td>15</td>
            <td>67</td>
            <td>15</td>
            <td>375</td>
            <td>Paralyze</td>
            <td>Phys</td>
            <td>1D12+6</td>
            <td>-</td>
            <td>-</td>
            <td>N15 Mind Blast</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Agar's Abomination</td>
            <td>17</td>
            <td>79</td>
            <td>17</td>
            <td>459</td>
            <td>Stone</td>
            <td>Phys</td>
            <td>2D12+6</td>
            <td>-</td>
            <td>-</td>
            <td>N20 Mind Blast</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
        <table id="m_beas2" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Beasts</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Harpies</td>
            <td>Harpy</td>
            <td>14</td>
            <td>61</td>
            <td>12</td>
            <td>336</td>
            <td>Drunk</td>
            <td>Phys</td>
            <td>2D7+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Harpy Hag</td>
            <td>17</td>
            <td>79</td>
            <td>14</td>
            <td>459</td>
            <td>Curse</td>
            <td>Phys</td>
            <td>2D7+5</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Harpy Witch</td>
            <td>19</td>
            <td>93</td>
            <td>16</td>
            <td>551</td>
            <td>Age</td>
            <td>Phys</td>
            <td>2D7+10</td>
            <td>-</td>
            <td>-</td>
            <td>N3 Mass Curse</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Gargoyles</td>
            <td>Stone Gargoyle</td>
            <td>16</td>
            <td>73</td>
            <td>18</td>
            <td>416</td>
            <td>Weak</td>
            <td>Phys</td>
            <td>2D12</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>10</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Marble Gargoyle</td>
            <td>22</td>
            <td>114</td>
            <td>22</td>
            <td>704</td>
            <td>Paralyze</td>
            <td>Phys</td>
            <td>2D12+4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>15</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Diamond Gargoyle</td>
            <td>33</td>
            <td>207</td>
            <td>26</td>
            <td>1419</td>
            <td>Paralyze</td>
            <td>Phys</td>
            <td>2D12+8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>20</td>
            <td>Imm</td>
          </tr>
          <tr>
            <td>Werewolves</td>
            <td>Wolfman</td>
            <td>20</td>
            <td>100</td>
            <td>20</td>
            <td>600</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D12+12</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td>Werewolf</td>
            <td>30</td>
            <td>180</td>
            <td>25</td>
            <td>1200</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D12+16</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Greater Werewolf</td>
            <td>40</td>
            <td>280</td>
            <td>30</td>
            <td>2000</td>
            <td>Uncon</td>
            <td>Phys</td>
            <td>2D12+20</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Werewolf Leader</span></td>
            <td>50</td>
            <td>420</td>
            <td>30</td>
            <td>0</td>
            <td>Uncon</td>
            <td>Phys</td>
            <td>3D12+25</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>15</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Serpents</td>
            <td>Sea Serpent</td>
            <td>28</td>
            <td>162</td>
            <td>30</td>
            <td>1064</td>
            <td>-</td>
            <td>Cold</td>
            <td>1D20+25</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>5</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>5</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Sea Monster</td>
            <td>36</td>
            <td>237</td>
            <td>35</td>
            <td>1656</td>
            <td>-</td>
            <td>Cold</td>
            <td>1D20+35</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Sea Terror</td>
            <td>48</td>
            <td>374</td>
            <td>40</td>
            <td>2784</td>
            <td>Afraid</td>
            <td>Cold</td>
            <td>1D20+45</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Medusas</td>
            <td>Medusa</td>
            <td>35</td>
            <td>227</td>
            <td>20</td>
            <td>1575</td>
            <td>Stone</td>
            <td>Magic</td>
            <td>4D4+8</td>
            <td>-</td>
            <td>-</td>
            <td>M12 Harm</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Medusa Enchantress</td>
            <td>40</td>
            <td>280</td>
            <td>25</td>
            <td>2000</td>
            <td>Stone</td>
            <td>Magic</td>
            <td>5D4+10</td>
            <td>-</td>
            <td>-</td>
            <td>M8 Paralyze</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Gorgon</td>
            <td>45</td>
            <td>337</td>
            <td>30</td>
            <td>2475</td>
            <td>Stone</td>
            <td>Magic</td>
            <td>6D4+12</td>
            <td>-</td>
            <td>-</td>
            <td>M9 Psychic Shock</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Beholders</td>
            <td>Flying Eye</td>
            <td>30</td>
            <td>180</td>
            <td>25</td>
            <td>1200</td>
            <td>Asleep</td>
            <td>Cold</td>
            <td>5D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>-</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Terrible Eye</td>
            <td>40</td>
            <td>280</td>
            <td>30</td>
            <td>2000</td>
            <td>Afraid</td>
            <td>Fire</td>
            <td>6D6</td>
            <td>-</td>
            <td>-</td>
            <td>N8 Fireball</td>
            <td>Imm</td>
            <td>30</td>
            <td>30</td>
            <td>-</td>
            <td>Imm</td>
            <td>40</td>
          </tr>
          <tr>
            <td></td>
            <td>Maddening Eye</td>
            <td>50</td>
            <td>400</td>
            <td>35</td>
            <td>3000</td>
            <td>Insane</td>
            <td>Elec</td>
            <td>7D6</td>
            <td>-</td>
            <td>-</td>
            <td>N10 Dispell Magic</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
            <td>-</td>
            <td>Imm</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Genies</td>
            <td>Genie</td>
            <td>33</td>
            <td>207</td>
            <td>35</td>
            <td>1419</td>
            <td>-</td>
            <td>Cold</td>
            <td>8D4+8</td>
            <td>-</td>
            <td>-</td>
            <td>M10 Ice Bolt</td>
            <td>-</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Djinn</td>
            <td>44</td>
            <td>325</td>
            <td>45</td>
            <td>2376</td>
            <td>Asleep</td>
            <td>Elec</td>
            <td>10D4+10</td>
            <td>-</td>
            <td>-</td>
            <td>M12 Lightning Bolt</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
            <td>-</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Efreet</td>
            <td>55</td>
            <td>467</td>
            <td>55</td>
            <td>3575</td>
            <td>Afraid</td>
            <td>Fire</td>
            <td>12D4+12</td>
            <td>-</td>
            <td>-</td>
            <td>M15 Fireball</td>
            <td>Imm</td>
            <td>30</td>
            <td>-</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Lesser Genie</span></td>
            <td>25</td>
            <td>136</td>
            <td>35</td>
            <td>0</td>
            <td>-</td>
            <td>Cold</td>
            <td>6D4+8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>0</td>
            <td>0</td>
            <td>Imm</td>
            <td>0</td>
            <td>0</td>
            <td>75</td>
          </tr>
          </tbody>
        </table>
        <table id="m_beas3" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Beasts</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Hydras</td>
            <td>Hydra</td>
            <td>45</td>
            <td>337</td>
            <td>22</td>
            <td>2475</td>
            <td>-</td>
            <td>Phys</td>
            <td>15D5</td>
            <td>Fire</td>
            <td>8D5</td>
            <td>-</td>
            <td>Imm</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Venomous Hydra</td>
            <td>55</td>
            <td>467</td>
            <td>44</td>
            <td>3575</td>
            <td>Poison</td>
            <td>Phys</td>
            <td>20D5</td>
            <td>Pois</td>
            <td>10D5</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Colossal Hydra</td>
            <td>65</td>
            <td>617</td>
            <td>66</td>
            <td>4875</td>
            <td>BrkItem</td>
            <td>Phys</td>
            <td>20D5</td>
            <td>Ener</td>
            <td>10D5</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Demons</td>
            <td>Devil Spawn</td>
            <td>20</td>
            <td>100</td>
            <td>20</td>
            <td>600</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D6+8</td>
            <td>Fire</td>
            <td>3D6</td>
            <td>N4 Fire Bolt</td>
            <td>Imm</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Devil Worker</td>
            <td>40</td>
            <td>280</td>
            <td>30</td>
            <td>2000</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D6+14</td>
            <td>Fire</td>
            <td>4D6</td>
            <td>N8 Fire Bolt</td>
            <td>Imm</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Devil Warrior</td>
            <td>60</td>
            <td>540</td>
            <td>40</td>
            <td>4200</td>
            <td>DrainSP</td>
            <td>Phys</td>
            <td>2D6+20</td>
            <td>Fire</td>
            <td>5D6</td>
            <td>N12 Fireball</td>
            <td>Imm</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td id="mu_BaaDevil"><span className="red">Devil of Baa</span></td>
            <td>60</td>
            <td>540</td>
            <td>40</td>
            <td>0</td>
            <td>Drain SP</td>
            <td>Phys</td>
            <td>2D6+20</td>
            <td>Fire</td>
            <td>5D6</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>0</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Devil Captain</td>
            <td>30</td>
            <td>180</td>
            <td>25</td>
            <td>1200</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D8+10</td>
            <td>Fire</td>
            <td>3D8</td>
            <td>N6 Fireball</td>
            <td>Imm</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Devil Master</td>
            <td>50</td>
            <td>400</td>
            <td>35</td>
            <td>3000</td>
            <td>Disease</td>
            <td>Phys</td>
            <td>2D8+15</td>
            <td>Fire</td>
            <td>4D8</td>
            <td>M10 Meteor Shower</td>
            <td>Imm</td>
            <td>40</td>
            <td>40</td>
            <td>40</td>
            <td>40</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Devil King</td>
            <td>70</td>
            <td>700</td>
            <td>45</td>
            <td>5600</td>
            <td>DrainSP</td>
            <td>Phys</td>
            <td>2D8+20</td>
            <td>Fire</td>
            <td>5D8</td>
            <td>M14 Incinerate</td>
            <td>Imm</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Demon Queen</span></td>
            <td>100</td>
            <td>1300</td>
            <td>40</td>
            <td>11000</td>
            <td>DrainSP</td>
            <td>Phys</td>
            <td>2D8+20</td>
            <td>-</td>
            <td>-</td>
            <td>M14 Incinerate</td>
            <td>Imm</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Dragons</td>
            <td>Flame Drake</td>
            <td>24</td>
            <td>129</td>
            <td>20</td>
            <td>816</td>
            <td>-</td>
            <td>Fire</td>
            <td>10D4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>10</td>
            <td>10</td>
            <td>30</td>
            <td>10</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Frost Drake</td>
            <td>28</td>
            <td>162</td>
            <td>25</td>
            <td>1064</td>
            <td>-</td>
            <td>Cold</td>
            <td>12D4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>10</td>
            <td>10</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Energy Drake</td>
            <td>32</td>
            <td>198</td>
            <td>30</td>
            <td>1344</td>
            <td>BrkItem</td>
            <td>Ener</td>
            <td>15D4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>10</td>
            <td>10</td>
            <td>40</td>
          </tr>
          <tr>
            <td></td>
            <td>Fire Lizard</td>
            <td>40</td>
            <td>280</td>
            <td>40</td>
            <td>2000</td>
            <td>-</td>
            <td>Fire</td>
            <td>10D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Lightning Lizard</td>
            <td>50</td>
            <td>400</td>
            <td>50</td>
            <td>3000</td>
            <td>BrkItem</td>
            <td>Elec</td>
            <td>12D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>40</td>
            <td>Imm</td>
            <td>40</td>
            <td>40</td>
            <td>40</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Thunder Lizard</td>
            <td>60</td>
            <td>540</td>
            <td>60</td>
            <td>4200</td>
            <td>BrkItem</td>
            <td>Cold</td>
            <td>14D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>50</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
            <td>50</td>
            <td>40</td>
          </tr>
          <tr>
            <td></td>
            <td>Wyrm</td>
            <td>50</td>
            <td>400</td>
            <td>40</td>
            <td>3000</td>
            <td>Pois</td>
            <td>Pois</td>
            <td>10D10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>Imm</td>
            <td>30</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Giant Wyrm</td>
            <td>60</td>
            <td>540</td>
            <td>50</td>
            <td>4200</td>
            <td>Pois</td>
            <td>Pois</td>
            <td>10D10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>40</td>
            <td>40</td>
            <td>40</td>
            <td>Imm</td>
            <td>40</td>
            <td>40</td>
          </tr>
          <tr>
            <td></td>
            <td>Great Wyrm</td>
            <td>70</td>
            <td>700</td>
            <td>60</td>
            <td>5600</td>
            <td>Pois</td>
            <td>Pois</td>
            <td>10D10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>Imm</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Red Dragon</td>
            <td>80</td>
            <td>880</td>
            <td>60</td>
            <td>7200</td>
            <td>-</td>
            <td>Fire</td>
            <td>12D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>50</td>
            <td>30</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td>Blue Dragon</td>
            <td>90</td>
            <td>1080</td>
            <td>80</td>
            <td>9000</td>
            <td>BrkItem</td>
            <td>Cold</td>
            <td>14D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>30</td>
            <td>70</td>
            <td>Imm</td>
            <td>70</td>
            <td>70</td>
            <td>70</td>
          </tr>
          <tr>
            <td></td>
            <td>Gold Dragon</td>
            <td>100</td>
            <td>1300</td>
            <td>100</td>
            <td>11000</td>
            <td>BrkItem</td>
            <td>Ener</td>
            <td>16D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>90</td>
            <td>Imm</td>
            <td>90</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Longfang Witherhide</span></td>
            <td>80</td>
            <td>880</td>
            <td>60</td>
            <td>7200</td>
            <td>-</td>
            <td>Fire</td>
            <td>12D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>50</td>
            <td>30</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
          </tbody>
        </table>
        <table id="m_elem" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Elementals</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Water</td>
            <td>Water Beast</td>
            <td>14</td>
            <td>61</td>
            <td>10</td>
            <td>336</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D12</td>
            <td>-</td>
            <td>-</td>
            <td>N3 Ice Bolt</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Water Spirit</td>
            <td>24</td>
            <td>129</td>
            <td>13</td>
            <td>816</td>
            <td>-</td>
            <td>Phys</td>
            <td>4D12</td>
            <td>-</td>
            <td>-</td>
            <td>N5 Ice Bolt</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Water Elemental</td>
            <td>36</td>
            <td>237</td>
            <td>16</td>
            <td>1656</td>
            <td>BrkItem</td>
            <td>Phys</td>
            <td>6D12</td>
            <td>-</td>
            <td>-</td>
            <td>N7 Ice Bolt</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Air</td>
            <td>Dust Devil</td>
            <td>16</td>
            <td>73</td>
            <td>10</td>
            <td>416</td>
            <td>-</td>
            <td>Elec</td>
            <td>3D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>Imm</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Twister</td>
            <td>22</td>
            <td>114</td>
            <td>12</td>
            <td>704</td>
            <td>-</td>
            <td>Elec</td>
            <td>5D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>Imm</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Air Elemental</td>
            <td>33</td>
            <td>207</td>
            <td>14</td>
            <td>1419</td>
            <td>BrkItem</td>
            <td>Elec</td>
            <td>8D6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>Imm</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Fire</td>
            <td>Fire Beast</td>
            <td>13</td>
            <td>55</td>
            <td>12</td>
            <td>299</td>
            <td>-</td>
            <td>Fire</td>
            <td>2D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Fire Spirit</td>
            <td>26</td>
            <td>145</td>
            <td>15</td>
            <td>936</td>
            <td>-</td>
            <td>Fire</td>
            <td>5D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Fire Elemental</td>
            <td>39</td>
            <td>269</td>
            <td>18</td>
            <td>1911</td>
            <td>BrkItem</td>
            <td>Fire</td>
            <td>8D8</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>Rock Beast</td>
            <td>25</td>
            <td>137</td>
            <td>20</td>
            <td>875</td>
            <td>-</td>
            <td>Phys</td>
            <td>10D3</td>
            <td>Phys</td>
            <td>8D3</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Earth Spirit</td>
            <td>30</td>
            <td>180</td>
            <td>25</td>
            <td>1200</td>
            <td>BrkArmor</td>
            <td>Phys</td>
            <td>15D3</td>
            <td>Phys</td>
            <td>12D3</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Earth Elemental</td>
            <td>40</td>
            <td>280</td>
            <td>30</td>
            <td>2000</td>
            <td>Uncon</td>
            <td>Phys</td>
            <td>25D3</td>
            <td>Phys</td>
            <td>20D3</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          </tbody>
        </table>
        <table id="m_undead" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Undeads</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist
            </th>
          </tr>
          <tr>
            <td>Fighters</td>
            <td>Skeleton</td>
            <td>6</td>
            <td>21</td>
            <td>8</td>
            <td>96</td>
            <td>-</td>
            <td>Phys</td>
            <td>3D4</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Skeleton Knight</td>
            <td>10</td>
            <td>40</td>
            <td>10</td>
            <td>200</td>
            <td>Afraid</td>
            <td>Phys</td>
            <td>3D4+2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Skeleton Lord</td>
            <td>14</td>
            <td>61</td>
            <td>14</td>
            <td>336</td>
            <td>Curse</td>
            <td>Phys</td>
            <td>3D4+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Ghost</td>
            <td>9</td>
            <td>35</td>
            <td>25</td>
            <td>171</td>
            <td>Afraid</td>
            <td>Magic</td>
            <td>1D6+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Evil Spirit</td>
            <td>13</td>
            <td>55</td>
            <td>30</td>
            <td>299</td>
            <td>Age</td>
            <td>Magic</td>
            <td>2D6+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>15</td>
          </tr>
          <tr>
            <td></td>
            <td>Specter</td>
            <td>19</td>
            <td>93</td>
            <td>35</td>
            <td>551</td>
            <td>Uncon</td>
            <td>Magic</td>
            <td>3D6+6</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Death Knight</td>
            <td>40</td>
            <td>280</td>
            <td>45</td>
            <td>2000</td>
            <td>Afraid</td>
            <td>Phys</td>
            <td>4D5+20</td>
            <td>Magic</td>
            <td>4D6</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>Doom Knight</td>
            <td>60</td>
            <td>540</td>
            <td>65</td>
            <td>4200</td>
            <td>Afraid</td>
            <td>Phys</td>
            <td>4D5+30</td>
            <td>Magic</td>
            <td>6D6</td>
            <td>-</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>30</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Cuisinart</td>
            <td>80</td>
            <td>880</td>
            <td>85</td>
            <td>7200</td>
            <td>Afraid</td>
            <td>Phys</td>
            <td>4D5+40</td>
            <td>Magic</td>
            <td>8D6</td>
            <td>-</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Mages</td>
            <td>Lich</td>
            <td>20</td>
            <td>100</td>
            <td>15</td>
            <td>600</td>
            <td>-</td>
            <td>Elec</td>
            <td>3D8+6</td>
            <td>-</td>
            <td>-</td>
            <td>N10 Dispell Magic</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>-</td>
          </tr>
          <tr>
            <td></td>
            <td>Greater Lich</td>
            <td>30</td>
            <td>180</td>
            <td>20</td>
            <td>1200</td>
            <td>-</td>
            <td>Fire</td>
            <td>4D8+12</td>
            <td>-</td>
            <td>-</td>
            <td>N10 Dispell Magic</td>
            <td>15</td>
            <td>15</td>
            <td>15</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td>Power Lich</td>
            <td>40</td>
            <td>280</td>
            <td>25</td>
            <td>2000</td>
            <td>-</td>
            <td>Ener</td>
            <td>5D8+20</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Agar</span></td>
            <td>50</td>
            <td>320</td>
            <td>25</td>
            <td>11000</td>
            <td>-</td>
            <td>Phys</td>
            <td>5D9+30</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>10</td>
            <td>Imm</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Lich King</span></td>
            <td>60</td>
            <td>600</td>
            <td>60</td>
            <td>2000</td>
            <td>-</td>
            <td>Phys</td>
            <td>5D8+20</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>20</td>
            <td>20</td>
            <td>20</td>
            <td>Imm</td>
            <td>10</td>
            <td>Imm</td>
          </tr>
          </tbody>
        </table>
        <table id="m_robot" className="center-table">
          <colgroup>
            <col span="2" className="left" />
              <col span="4" className="right" />
                <col span="12" className="center" />
          </colgroup>
          <tbody>
          <tr>
            <th>Machines</th>
            <th>Name</th>
            <th>level</th>
            <th>HP</th>
            <th>AC</th>
            <th>XP</th>
            <th>Special<br/>skill</th>
            <th colSpan="2" className="center">Attack type1</th>
            <th colSpan="2" className="center">Attack type2</th>
            <th>Spell</th>
            <th>Fire<br/>Resist</th>
            <th>Elec<br/>Resist</th>
            <th>Cold<br/>Resist</th>
            <th>Pois<br/>Resist</th>
            <th>Mag<br/>Resist</th>
            <th>Phys<br/>Resist</th>
          </tr>
          <tr>
            <td>Droids</td>
            <td>Patrol Unit</td>
            <td>50</td>
            <td>400</td>
            <td>60</td>
            <td>3000</td>
            <td>BrkItem</td>
            <td>Ener</td>
            <td>10D5+10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>30</td>
            <td>10</td>
            <td>30</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>20</td>
          </tr>
          <tr>
            <td></td>
            <td>Enforcer Unit</td>
            <td>70</td>
            <td>700</td>
            <td>80</td>
            <td>5600</td>
            <td>BrkItem</td>
            <td>Ener</td>
            <td>12D5+15</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>40</td>
            <td>20</td>
            <td>40</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>30</td>
          </tr>
          <tr>
            <td></td>
            <td>Terminator Unit</td>
            <td>90</td>
            <td>1080</td>
            <td>100</td>
            <td>9000</td>
            <td>Errad</td>
            <td>Ener</td>
            <td>20D5+20</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>60</td>
            <td>30</td>
            <td>60</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>50</td>
          </tr>
          <tr>
            <td></td>
            <td><span className="red">Reactor</span></td>
            <td>100</td>
            <td>1300</td>
            <td>40</td>
            <td>11000</td>
            <td>-</td>
            <td>Ener</td>
            <td>20D5+20</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
            <td>Imm</td>
          </tr>
          </tbody>
        </table>
      </section> */}
    </>
  );
}

export default App;

'use client'

export default function Home() {
    return <>
        <div id="leftBox">
            <h1>Météo App</h1>
            <img src="/Images/sun.png" alt="Sun" className="currentDay"/>
            <h1>12&deg;C</h1>
            <h3>Lundi, <span>13:00</span></h3>
            <hr/>
            <h4><img src="/Images/meteo_Cloud.png" alt="Cloud" className="howCloudy" />Ciel Ouverte</h4>
            <h4><img src="Images/Rain.png" alt="Rain" className="howRaining"/> Pluie - 0%</h4>
            <h3 className="currentPlace">Paris, France</h3>
        </div>
        <div id="rightBox">
            <h3>Horaire</h3>
            <div className="row-Line">
                <div className="timeChange">
                    <p>14h</p>
                    <img src="/Images/sun.png" alt="Sun" className="howHoraire"/>
                    <p>14&deg;</p>
                </div>
                <div className="timeChange">
                    <p>15h</p>
                    <img src="/Images/sun.png" alt="Sun" className="howHoraire"/>
                    <p>14&deg;</p>
                </div>
                <div className="timeChange">
                    <p>16h</p>
                    <img src="/Images/meteo_sunCloud.png" alt="sunCloud" className="howHoraire"/>
                    <p>15&deg;</p>
                </div>
                <div className="timeChange">
                    <p>17h</p>
                    <img src="/Images/meteo_sunCloud.png" alt="sunCloud" className="howHoraire"/>
                    <p>15&deg;</p>
                </div>
                <div className="timeChange">
                    <p>18h</p>
                    <img src="/Images/meteo_Cloud.png" alt="Cloud" className="howHoraire"/>
                    <p>13&deg;</p>
                </div>
                <div className="timeChange">
                    <p>19h</p>
                    <img src="/Images/meteo_Cloud.png" alt="Cloud" className="howHoraire"/>
                    <p>11&deg;</p>
                </div>
            </div>
            <h3>Prochain Jour</h3>
            <div className="row-line-Pos">
                <div className="nextDay">
                    <p>Mardi</p>
                    <img src="/Images/sun.png" alt="Sun" className="howNextDay" />
                    <p>17&deg;<span>12</span></p>
                </div>
                <div className="nextDay">
                    <p>Mercredi</p>
                    <img src="/Images/sun.png" alt="Sun" className="howNextDay" />
                    <p>18&deg;<span>8</span></p>
                </div>
                <div className="nextDay">
                    <p>Jeudi</p>
                    <img src="/Images/meteo_sunCloud.png" alt="sunCloud" className="howNextDay" />
                    <p>15&deg;<span>9</span></p>
                </div>
                <div className="nextDay">
                    <p>Vendredi</p>
                    <img src="/Images/meteo_CloudRaining.png" alt="CloudRaining" className="howNextDay" />
                    <p>13&deg;<span>7</span></p>
                </div>
                <div className="nextDay">
                    <p>Samedi</p>
                    <img src="/Images/meteo_Cloud.png" alt="Cloud" className="howNextDay" />
                    <p>14&deg;<span>5</span></p>
                </div>
                <div className="nextDay">
                    <p>Dimamche</p>
                    <img src="/Images/sun.png" alt="Sun" className="howNextDay" />
                    <p>12&deg;<span>-3</span></p>
                </div>
            </div>
        </div>
    </>
}

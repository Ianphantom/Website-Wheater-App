class WeatherBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="cuaca card">
            <div class=" weather title">
                    <p> Weather </p>
            </div>
            <div class="cuaca pemberitahuan"></div>
            <div class="cuaca wcontainer">
                <div class=" weather icon">
                    <img width="120" src="assets/image/partlysunny.png">
                </div>
                <div class="cuaca lokasi">
                    <p>-</p>
                </div>
                <div class="cuaca description">
                    <p>-</p>
                </div>
                <div class="cuaca suhu">
                    <p>- <span>°C</span></p>
                </div>
                        
            </div>
        </div>
        `;
    }
 }
  
 customElements.define("weather-bar", WeatherBar);
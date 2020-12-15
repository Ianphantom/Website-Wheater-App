
 class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <input placeholder="Search Location" id="keyword" type="search">
            <button type="button" id="button">Search</button>
        `;
    }
 }
{/* <button id="button" type="submit" onclick="cari()">Search</button> */}
 customElements.define("search-bar", SearchBar);
 class ContactMe extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <table class="contact">
            <tr>
                <td><a href="https://www.facebook.com/ianfelixjonatan.simanjuntak" target="_blank"><img src="assets/image/Facebook.png"></a></td>
                <td><a href="https://www.instagram.com/ianfelixjonatan/" target="_blank"><img src="assets/image/Ig.png"></a></td>
                <td><a href="https://www.youtube.com/channel/UC_6P7e3PkYFqxGPb8E35_1A/featured"><img src="assets/image/Youtube.png"></a></td>
            </tr>
        </table>
            `;
    }
 }
  
 customElements.define("contact-me", ContactMe);
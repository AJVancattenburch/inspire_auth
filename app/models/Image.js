export class Image {
  constructor(data) {
    this.url = data.url
    this.img = data.imgUrl
    this.query = data.query
    this.author = data.author
    this.largeImg = data.largeImgUrl
  }


  get ImageTemplate() {
    return /*html*/`
    <div class="col-4 mt-5" style="position: absolute; bottom: 2rem; left: 1rem;">
      <div class="card bg-dark text-light p-3" style="opacity: .9;">
            <div class="card-body">
              <h4 id="${this.query}" class="card-title">Theme: "The ${this.query}"</h4>
              <b><div id="${this.author}" class="card-text my-1">Artist: ${this.author}</div></b>
              <div class="card-text my-1">Like this image? Click button on the bottom right to view original image page source.</div>
              <div class="d-flex offset-8" style="filter: brightness(1.5); text-shadow: 1px 1px 2px #000;">
                <a id="${this.url}" href="${this.url}" class="btn btn-primary py-1">Image URL</a>
              </div>
            </div>
          </div>
        </div>
    `
  }




  // onclick="app.NasaController.getDate('${this.date}')" 
  // <button onclick="app.SandboxController.removeFavorite('${this.id}')" title="Remove Favorite" class="btn btn-danger mt-1 position-absolute top-0 start-0"><i class="mdi mdi-close-outline"></i></button>













}
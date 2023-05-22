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
    <div class="col-3 mt-5 text-center" style="position: absolute; bottom: 2rem; left: 1rem;">
      <div class="image-card card bg-dark text-light p-3 rounded-4" style="opacity: .7;">
            <div class="card-body">
              <h5 id="${this.query}" class="card-title">"The ${this.query}"</h5>
              <i><h6 id="${this.author}" class="card-text my-1">Artist: ${this.author}</h6></i>
              <div class="d-flex offset-2" style="filter: brightness(2.5); text-shadow: 1px 1px 2px #fff;">
                <a id="${this.url}" href="${this.url}" class="btn btn-primary mt-3 text-dark" style="font-size: .75rem; background-color: #000; border-color: #111;">Image Link</a>
              </div>
            </div>
          </div>
        </div>
    `
  }




  // onclick="app.NasaController.getDate('${this.date}')" 
  // <button onclick="app.SandboxController.removeFavorite('${this.id}')" title="Remove Favorite" class="btn btn-danger mt-1 position-absolute top-0 start-0"><i class="mdi mdi-close-outline"></i></button>













}
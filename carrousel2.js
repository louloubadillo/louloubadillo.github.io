class Carrousel{
    /**
     * @type {HTMLElement}
     */
    dom;
    /**
     * @type {Array<HTMLElement>}
     */
    children;
    activeIndex = 0;
    constructor(element){
        this.dom = element;
        this.children = [...this.dom.children].filter(e=>e.nodeName!='BUTTON');
        //console.log(this.children);
        this.dom.addEventListener('scroll', ()=>{
            this.children.forEach((child, i) => {
                //nth
            });
            console.log(this.children.map(c=>this.isElementVisible(c)), this.activeIndex)
        });
        this.dom.querySelector('.carrousel-prev').addEventListener('click', this.goToPrev.bind(this));
        this.dom.querySelector('.carrousel-next').addEventListener('click', this.goToNext.bind(this));
    }
    /**
     * @param {HTMLElement} element;
     */

    goToPrev(){
        if(this.activeIndex==0){
            this.dom.scrollLeft = this.children[this.children.length-1].offsetLeft;
        } else {
            this.dom.scrollLeft = this.children[0].offsetLeft;
            activeIndex--;
        }
    }
    goToNext(){
        if(this.activeIndex==this.children.length-1){
            this.dom.scrollLeft = this.children[0].offsetLeft;
            this.activeIndex = 0; 
        } else {
            this.dom.scrollLeft = this.children[this.activeIndex+1].offsetLeft;
            this.activeIndex++;
        }
    }
}
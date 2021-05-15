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
        console.log(this.children);
        this.dom.addEventListener('scroll', ()=>{
            this.children.forEach((child, i) => {
                if(this.isElementVisible(child)){
                    child.classList.add('visible');
                    this.activeIndex = i;
                }else{
                    child.classList.remove('visible');
                }
            });
            console.log(this.children.map(c=>this.isElementVisible(c)), this.activeIndex)
        });
        this.dom.querySelector('.carrousel-prev').addEventListener('click', this.goToPrev.bind(this));
        this.dom.querySelector('.carrousel-next').addEventListener('click', this.goToNext.bind(this));
    }
    /**
     * @param {HTMLElement} element;
     */
    isElementVisible(element){
        let parent = element.parentElement;
        let parentRect = parent.getBoundingClientRect();
        let elementRect = element.getBoundingClientRect();
        let rect = {
            top:    elementRect.top - parentRect.top,
            bottom: parentRect.bottom - elementRect.bottom,
            left:   elementRect.left - parentRect.left,
            right:  - parentRect.right + elementRect.right
        }
        return Object.values(rect).every(item=>item==0);
    }
    goToPrev(){
        console.log(this.activeIndex)
        if(this.activeIndex==0){
            this.dom.scrollLeft = this.children[this.children.length-1].offsetLeft;
        } else {
            this.dom.scrollLeft = this.children[0].offsetLeft;
        }
    }
    goToNext(){
        if(this.activeIndex==this.children.length-1){
            this.dom.scrollLeft = this.children[0].offsetLeft;
        } else {
            this.dom.scrollLeft = this.children[this.activeIndex+1].offsetLeft;
        }
    }
}
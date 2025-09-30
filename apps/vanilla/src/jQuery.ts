class jQuery {
  private elements: NodeListOf<Element>;

  constructor(selector: string) {
    this.elements = document.querySelectorAll(selector);
  }

  public addClass(classname: string): jQuery {
    this.elements.forEach((element) => {
      element.classList.add(classname);
    });
    return this;
  }

  public html(content: string): jQuery {
    this.elements.forEach((element) => {
      element.innerHTML = content;
    });
    return this;
  }

  public hide(): jQuery {
    this.elements.forEach((element) => {
      element.setAttribute('style', 'display:none;');
    });
    return this;
  }

  public show(): jQuery {
    this.elements.forEach((element) => {
      element.setAttribute('style', 'display:flex;');
    });
    return this;
  }

  public on(type: string, callback: (event: Event) => void): jQuery {
    this.elements.forEach((element) => {
      element.addEventListener(type, callback);
    });
    return this;
  }
}

export const $ = (selector: string) => new jQuery(selector);

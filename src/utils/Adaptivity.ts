class Adaptivity {
  private breakpoints = {
    mobile: 1040,
  };

  private state = {
    width: 0,
  };

  private handleResize() {
    this.state.width = window.innerWidth;
  }

  public subscribe() {
    window.addEventListener("resize", this.handleResize);
  }

  public unsubscribe() {
    window.removeEventListener("resize", this.handleResize);
  }

  public isMobile(): Boolean {
    return this.state.width <= this.breakpoints.mobile;
  }

  public isDesktop(): Boolean {
    return !this.isMobile();
  }
}

export default new Adaptivity();

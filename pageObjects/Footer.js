class Footer {
  constructor(page) {
    this.page = page;
    this.twitter = page.locator('.social_twitter');
    this.facebook = page.locator('.social_facebook');
    this.linkedin = page.locator('.social_linkedin');
  }

  async clickTwitterLink() {
    await this.twitter.click();
    return this.twitter.getAttribute('href');
  }
  async clickFacebookLink() {
    await this.facebook.click();
    return this.facebook.getAttribute('href');
  }
  async clickLinkedinLink() {
    await this.linkedin.click();
    return this.linkedin.getAttribute('href');
  }
}

export default Footer;

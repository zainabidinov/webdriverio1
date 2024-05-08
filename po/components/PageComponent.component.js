class PageComponent {
  get headerButton() {
    return $("a.header__btn");
  }

  get pasteTextArea() {
    return $("textarea#postform-text");
  }

  get expirationDropdown() {
    return $("#select2-postform-expiration-container");
  }

  get nameInput() {
    return $("input#postform-name");
  }

  get createButton() {
    return $("button.btn.-big");
  }
}

module.exports = PageComponent;

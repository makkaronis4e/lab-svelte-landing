<script>
  import TopAppBar, {Row, Section, Title} from "@smui/top-app-bar";
  import {Icon} from '@smui/common';
  import MenuSurface, {Anchor} from '@smui/menu-surface';
  import Button from '@smui/button';

  import Carousel from "../carousel/carousel.svelte"


  let formSurface;

  let pages = [
    { name: "Main", page: "https://google.com" },
    { name: "Services", page: "https://google.com" },
    { name: "Cats", page: "https://google.com" },
    { name: "Info", page: "https://google.com" },
    { name: "Contacts", page: "https://google.com" },
    { name: "Personal cabinet", page: "https://google.com" },
  ];

  let mail = "gabc@abc.abc";
  let phone = "+38 1111111111111";

  let carouselImages = [
    "http://placekitten.com/500/280",
    "http://placekitten.com/580/300",
    "http://placekitten.com/640/300",
    "http://placekitten.com/550/280",
    "http://placekitten.com/600/250",
    "http://placekitten.com/620/260",
  ]

</script>


<div class="top-container">
  <div class="top-container__left-column">
    <aside class="main-logo-container">
      <img src="assets/main-logo.png" class="main-logo-container__logo" alt="main-logo">
    </aside>
  </div>
  <div class="top-container__right-column">
    <div class="header-container">
      <div class="upper-header">
        <div class="upper-header__contacts">
          <a class="upper-header__contacts__item" href="mailto:>{mail}">
            <Icon class="material-icons">mail_outline</Icon>
            <span>
              {mail}
            </span>
          </a>
          <a class="upper-header__contacts__item" href="tel:{phone}">
            <Icon class="material-icons">phone</Icon>
            <span>
              {phone}
            </span>
          </a>
        </div>
      </div>
      <TopAppBar dense="true" variant="static" color='primary' class="header">
          <Row>
          {#each pages as page}
            <Section class="header__nav-item">
              <Button class="header__nav-item__button">{page.name}</Button>
            </Section>
            {/each}
            <Section class="header__nav-item">
            <Button class="header__nav-item__button" on:click={() => formSurface.setOpen(true)}>Log in</Button>
              <MenuSurface bind:this={formSurface} anchorCorner="BOTTOM_LEFT">
                <span>reg</span>
              </MenuSurface>
            </Section>
          </Row>
      </TopAppBar>
    </div>
    <div class="top-container__right-column__carousel-container">
      <Carousel bind:items = {carouselImages}></Carousel>
    </div>
  </div>
</div>

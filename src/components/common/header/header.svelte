<script>
  import TopAppBar, {Row, Section, Title} from "@smui/top-app-bar";
  import {Icon} from '@smui/common';
  let mail = "gabc@abc.abc";
  let phone = "+38 1111111111111";

  let logoSrc = "../../../assets/telephone.png";

</script>


<div class="top-container">
  <aside class="main-logo-container">
    <img src="assets/main-logo.png" class="main-logo-container__logo">
  </aside>
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

    <TopAppBar variant="static" color='secondary' class="header">
        <Row>
          <Section>
            <Title>Static</Title>
          </Section>
          <Section align="end" toolbar>
          </Section>
        </Row>
    </TopAppBar>
  </div>
</div>



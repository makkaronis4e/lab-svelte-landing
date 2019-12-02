<script>
	import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
</script>

<style lang="scss">
</style>


<div class="header__container">
	<div class="upper-header">
    <div class="upper-header__contacts">
      <a class="upper-header__contacts__item" href="mailto:abc@abc.abc">gabc@abc.abc</a>
      <a class="upper-header__contacts__item" href="tel:+11111111">+38 1111111111111</a>
    </div>
  </div>

	 <TopAppBar variant="static" color='secondary'>
        <Row>
          <Section>
            <Title>Static</Title>
          </Section>
          <Section align="end" toolbar>
          </Section>
        </Row>
    </TopAppBar>
</div>

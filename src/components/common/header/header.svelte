<script>
	import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
</script>

<style lang="scss">
	@import "./header.scss";
</style>


<div class="container">
	<div class="upper-header"></div>
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

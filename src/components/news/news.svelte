<script>

    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
let news = [
    {title: "Title 1", previewUrl: "http://placekitten.com/200/150", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."},
    {title: "Title 2", previewUrl: "http://placekitten.com/260/200", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."},
    {title: "Title 3", previewUrl: "http://placekitten.com/220/200", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."},
]

</script>


<div class="news">
   <h3 class="news__title">News</h3>
   <div class="news__container">
        {#each news as item}
            <div class="news__container__item">
                <div class="card-container">
                    <Card>
                        <Media class="card-media-16x9" style="background-image: url({item.previewUrl})" aspectRatio="16x9">
                            <MediaContent>
                            <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                                <h2 class="mdc-typography--headline6" style="margin: 0;">{item.title}</h2>
                            </div>
                            </MediaContent>
                        </Media>
                        <Content class="mdc-typography--body2">
                            {item.text}
                        </Content>
                        <Actions fullBleed>
                            <Button>
                                <Label>Read more</Label>
                                <i class="material-icons" aria-hidden="true">arrow_forward</i>
                            </Button>
                        </Actions>
                    </Card>
                </div>
            </div>
        {/each}
    </div>
</div>

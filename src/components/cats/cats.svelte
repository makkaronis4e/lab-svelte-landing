<script>

    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';

   let loading = true;
   let catsList = [];

   getNames();

   async function getNames() {
       fetch("https://namey.muffinlabs.com/name.json?count=10", { mode: 'cors' })
        .then(x => x.json())
        .then (x =>  {
            createArray(x);
            setTimeout(x=> loading = false, 3000)
        });
   }
   
    function createArray(names) {
        for (let i = 0, k = 200; i < 10; i++, k+=10) {
            catsList.push({name: names[i], previewUrl: `http://placekitten.com/${k}/${k}`, text: "Lorem ipsum dolor"});
        }
    }


</script>


<div class="cats">
   <h3 class="cats__title">Cats</h3>
        {#if loading}
            <img src="assets/spinner.gif" alt="">
        {:else}
             <div class="cats__container">
                {#each catsList as item}
                    <div class="cats__container__item">
                        <div class="card-container">
                            <Card class="cat-card">
                                <div class="cat-card__left-column">
                                    <img src="{item.previewUrl}" alt="cat-preview">
                                </div>
                                <div class="cat-card__right-column">
                                    <Content>{item.name}</Content>
                                    <IconButton class="cat-card__right-column__like-button" toggle aria-label="Add to favorites" title="Add to favorites">
                                        <Icon class="material-icons" on>favorite</Icon>
                                        <Icon class="material-icons">favorite_border</Icon>
                                    </IconButton>
                                </div>
                            </Card>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
</div>

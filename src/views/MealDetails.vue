<template>
    <div>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-auto rounded"/>
        <h2 class="text-2xl font-bold mt-4">{{ meal.strMeal }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div>
               <strong class="font-bold"> Categorie:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Zone:</strong> {{ meal.strArea }}
            </div>
            <div>
               <strong class="font-bold"> Mots clés:</strong> {{ meal.strTags }}
            </div>
        </div>
        <div>
            <p class="text-lg">{{ meal.strInstructions }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1 }`]">
                            {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-3">Mesures</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strMeasure${ind + 1 }`]">
                            {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>

                <a :href="meal.strSource"
                target="_blank">
                Voir La Source
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const meal = ref({});
const error = ref(null);

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals?.[0] || {};
    })
    .catch(err => {
      error.value = err.message;
    })
    .finally(() => {
      loading.value = false;
    });
});

</script>
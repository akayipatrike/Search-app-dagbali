<template>
   <div class="p-8">
        <input type="text"
                v-model="keyword"
                @input="searchMeals"
                class="rounded border-2 border-gray-200 w-full"
                placeholder="Rechercher des Repas" />    
   </div>   
   <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded">
            <router-link to="/">
                <img :src="meal.strMealThumb" alt="strMeal" class="w-full h-auto rounded"/>
            </router-link>
            <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
            
            <p>
                Bring a large pot of water to a boil. Add kosher salt to the boiling water,
                 then add the pasta. Cook according to the package instructions, about 9 minutes.
            </p>
            <div class="p-3">
                <a :href="meal.strYoutube" target="_blank">Youtube</a>
               
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals || []);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name || '';
    if(keyword.value){
        searchMeals()
    }
})
</script>
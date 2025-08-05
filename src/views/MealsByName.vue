<template>
   <div class="p-8">
        <input type="text"
                v-model="keyword"
                @input="searchMeals"
                class="rounded border-2 border-gray-200 w-full"
                placeholder="Rechercher des Repas" />    
   </div>   
   <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

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
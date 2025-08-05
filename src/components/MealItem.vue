<template>
     <div class="bg-white shadow rounded">
            <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal }}">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-auto rounded"/>
            </router-link>
            <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
            
            <p>
                Bring a large pot of water to a boil. Add kosher salt to the boiling water,
                 then add the pasta. Cook according to the package instructions, about 9 minutes.
            </p>
            <div class="p-3">
               <YoutubeButton :href="meal.strYoutube">
                    <span class="text-blue-500">Voir sur Youtube</span>
                </YoutubeButton>
               
            </div>
        </div>
</template>

<script setup>
const { meal } = defineProps({
    meal: {
        type: Object,
        required: true
    }
});
</script>
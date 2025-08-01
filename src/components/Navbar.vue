<template>
        <header class="bg-white shadow h-16 flex items-stretch justify-between px-4">
            <router-link :to="{name: 'home'}" class=" inline-flex items-center px-5">
                Accueil 
            </router-link>

            <div class="flex items-center gap-1 ">

                <router-link :to="{name:'byName'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-gray-100">
                    Rechercher des Repas
                </router-link>

                <router-link :to="{name:'byLetter'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-gray-100">
                    Repas par Lettre
                </router-link>

                <router-link :to="{name:'byIngredient'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-gray-100">
                    Repas par Ingrédients
                </router-link>

            </div>
        </header>
</template>
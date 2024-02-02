<template>
    <div class="overflow-y-hidden">
        <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div class="bg-white bg-opacity-5 rounded-lg flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div class="flex flex-col justify-center md:w-1/2">
                        <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800">Best Knifes</h1>
                        <p class="text-base lg:text-xl text-gray-800 mt-2">Save drop <span class="font-bold">50%</span></p>
                    </div>
                    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src="@/assets/images/knifes/burtlefy.png" alt="" class="h-40" />
                    </div>
                </div>
                <div class="bg-white bg-opacity-5 rounded-lg md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div class="flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800">Knifes Box</h1>
                        <p class="text-base lg:text-xl text-gray-800">Save buy <span class="font-bold">30%</span></p>
                    </div>
                    <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <img src="@/assets/images/knifes/handtans.png" alt="" class="h-40" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "component",
    data() {
        return {};
    },
};
</script>

<style>

</style>

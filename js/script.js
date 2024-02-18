//Select Image
        const image = document.querySelector('img');
        //Select span to display values next to the label
        const summary = document.querySelector('.filterSummary');
        //Select Image controls  div
        const imageControlsContainer = document.querySelector('.image-controls');
        //Select all inputs
        const filterControls = [...document.querySelectorAll('input[type=range]')];
        //Select all buttons
        const filterButtons = [...document.querySelectorAll('button')];

        const resetbutton = document.querySelector('.reset').addEventListener('click', resetFilters);
        const advancedButton = document.querySelector('.toggleAdvanced');


        function toggleAdvanced() {
            //Check if active class is present and  add .active if not 
            if (!imageControlsContainer.classList.contains('active')) {
                imageControlsContainer.classList.add('active', 'w3-animate-opacity')
                advancedButton.innerHTML = `
                <i class="fa fa-angle-up">
                    <span>Hide Advanced Settings...</span>
                </i>
                
                `
            } else {
                imageControlsContainer.classList.remove('active')
                summary.classList.remove('active', 'w3-animate-opacity');
                advancedButton.innerHTML = `
                <i class="fa fa-angle-down">
                    <span>Show Advanced Settings...</span>
                </i>
                `
            }


        }

        //Function to run when each button it clicked
        function selectFilter(e) {
            //Get filter value
            const clickedFilter = e.target.getAttribute('data-filter');
            console.log(clickedFilter);

            image.style.filter += clickedFilter;

        }
        //RESET ALL FILTERS
        function resetFilters() {
            image.style.filter = '';
        }

        function applyFilter() {
            //Initialise variable to store filters
            let filters = ''
            //Loop through each input
            filterControls.map(item => {
                const value = item.value;
                filters += item.getAttribute('data-filter') + '(' + value + item.getAttribute('data-scale') + ') ';
                console.log(filters);

                image.style.filter = filters;
                summary.innerHTML = filters;
                summary.classList.add('active');
            })
        }

        filterControls.forEach(item => item.addEventListener('active', applyFilter));

        filterButtons.forEach(button => button.addEventListener('click', selectFilter));

        advancedButton.addEventListener('click', toggleAdvanced);
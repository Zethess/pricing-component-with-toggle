class TemplateManager {
    loadEventListeners() {
        $(document).ready(() => {
            $('#slider').change((event) => {
                this.changeCardText($(event.currentTarget));
            });
        });
    }
    changeCardText(sliderButton) {
        const card = sliderButton.closest('.root').find('.card');
        // se utiliza para obtener el valor de la propiedad checked del elemento HTML
        const isMonthly = sliderButton.prop('checked');
        const contentMap = isMonthly
            ? {
                  'price-card-container-child-1': '19.99',
                  'price-card-container-child-2': '24.99',
                  'price-card-container-child-3': '39.99'
              }
            : {
                  'price-card-container-child-1': '199.99',
                  'price-card-container-child-2': '249.99',
                  'price-card-container-child-3': '399.99'
              };
        
        this.updateCardText(card, contentMap);
    }
    //Dependiendo de si el slider esta activo o no, tendra un precio diferente
    updateCardText(card, contentMap) {
        card.find('.child-card').each(function () {
            const childCard = $(this);
            
            for (const className in contentMap) {
                if (childCard.hasClass(className)) {
                    childCard.find('strong').text(contentMap[className]);
                    break;
                }
            }
        });
    }
    init() {
        this.loadEventListeners();
    }
}

const templateManager = new TemplateManager();
templateManager.init();

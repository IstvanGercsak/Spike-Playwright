class navigaton{

    // Client
    client() { return '#main-nav-clients-link' }

    // Manager
    manager() { return '#main-nav-manager-link' }

    //Settings
    business() { return '#business-settings' }
        csvExport() { return '#csv-export' }
        discunts() { return '#discounts' }
        taxRates() { return '#tax-rates' }
    categories() { return '#categories' }
        productCategories() { return 'Product Categories' }
        serviceCategories() { return 'Service Categories' }
        staffCategories() { return 'Staff Categories' }
        clientCategories() { return 'Client Categories' }
        sources() { return 'Sources' }

    // Services
    services() { return '#services' }
    packages() { return '#packages' }
    courses() { return '#courses' }
    specialOffers() { return '#special-offers' }

    // Staff
    access() { return '#access' }
}

module.exports = new navigaton()
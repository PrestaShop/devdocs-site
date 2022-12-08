$(function() {
    // '#hooks tr' to be removed when 1.7 doc is deleted
    const allItems = $('#hooks tr, #hookFilter ~ dl dt');

    const escapeRegExp = function(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const displayAll = function() {
        allItems.each(function() {
        const $item = $(this);

        if ($item.is(':hidden')) {
            $item.show();

            // to be removed when 1.7 doc is deleted
            $item.next('dd').show();
        }
        });
    };

    const filterList = function(search) {
        let count = 0;
        const regex = new RegExp(escapeRegExp(search), 'i');

        allItems.each(function() {
            const $item = $(this);
            const text = $item.text();
            const matchesSearch = Boolean(text.match(regex));
            $item.toggle(matchesSearch);

            // to be removed when 1.7 doc is deleted
            const $sibling = $item.next('dd');
            $sibling.toggle(matchesSearch);

            if (matchesSearch) {
                count += 1;
            }
        });

        $('#hookFilter .empty').toggleClass('show', count === 0);
    };

    $('#hookFilter input[type="text"]').on('input', function(e) {
        const searchText = $(this)
            .val()
            .replace(/^\s+|\s+$/, '');

        if (searchText.length > 0) {
            filterList(searchText);
        } else {
            $('#hookFilter .empty').removeClass('show');
            displayAll();
        }
    });
});

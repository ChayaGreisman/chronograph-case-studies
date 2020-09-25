# Prompt 1 -Find the ids of all documents which do not have any pages
    Document.all.map { |doc| 
        if doc.pages.count == 0 
        doc.id
        end
    }.reject(&:nil?)

# Prompt 2 -Return a list of report titles and the total number of pages in the report. Reports which do not have pages may be ignored
    Report.all.map { |rep|     
        num_of_pages = 0
        rep.documents.each { |doc|
            num_of_pages += doc.pages.count
        }
        if num_of_pages > 0
            { rep.title => num_of_pages}
        end
    }.reject(&:nil?)

# Prompt 3 -How would you determine the percentage of document pages which include a footnote?
    # 3A ~ percentage of all pages
    total_with_footnote = Page.all.select{|page| page.footnote != nil}.count
    total = Page.all.count 
    return ((total_with_footnote + 0.0) / total) * 100

    # 3B ~ percentage of a specific document's pages
    total_with_footnote = document.pages.select{|page| page.footnote != nil}.count
    total = document.pages.count 
    return ((total_with_footnote + 0.0) / total) * 100

# Prompt 4 -How would you search the body of a page to look for a specific search string?
    def search(search_string)
        page.body.include?(search_string)
    end
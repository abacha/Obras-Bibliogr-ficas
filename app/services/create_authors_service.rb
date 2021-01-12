class CreateAuthorsService

  def initialize(authors)
    @authors = authors
  end

  def self.build(authors)
    new(authors).perform
  end

  def perform

    formatted_authors = []
    @authors.each do |author|
      author_name = format_author_name(author)
      formatted_authors << author_name
      create_author(author_name) if author_name.present?
    end
    return formatted_authors
  end

  private

  def format_author_name(author)
    
    return false if author.length <= 2

    author_name = ""

    last_name_invalid = include_any?(author)

    name_parts = author.split

    if last_name_invalid
      author_name = name_parts[-2].upcase + " " + name_parts.last.upcase + "," 
      name_parts.delete(name_parts[-2])
      name_parts.delete(name_parts.last)
    else
      if name_parts.count == 1
        author_name = name_parts.last.upcase
      else
        author_name = name_parts.last.upcase + ","
      end
      name_parts.delete(name_parts.last)
    end

    name_parts.each do |name_part|
      author_name = author_name + " " + capitalize_last_name(name_part)
    end

    return author_name
  end

  def include_any?(full_name)

    return false if full_name.split.count <= 2

    array_last_name_invalid = ["FILHO", "FILHA", "NETO", "NETA", "SOBRINHO", "SOBRINHA", "JUNIOR"]

    array_last_name_invalid.any? {|i| full_name.upcase.match(/\b#{i}\b/)}
    
  end

  def capitalize_last_name(name_part)

    array_not_last_name = ["da", "de", "do", "das", "dos"]

    if array_not_last_name.any? {|i| name_part.downcase.match(/\b#{i}\b/)}
      return name_part.downcase
    else
      return name_part.capitalize
    end

  end

  def create_author(name)

    Author.create(name: name)

  end


end
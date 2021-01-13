require 'rails_helper'

RSpec.describe CreateAuthorsService do

  let(:name_list) {
    [
      "Gilberto ferreira de Sousa Junior", 
      "Gilberto ferreira de Sousa ajunior",
      "Gabriel carvalho", 
      "Aline",
      "De",  
      "",
      "Roberto coelho SouZa",
      "Junior",
      "Amanda brito Filha",
      "Ana"
    ]
  }

  describe "service format authors name" do
    it 'must return formatted names' do
      formatted_authors = CreateAuthorsService.build(name_list)
      expect(formatted_authors.count).to eq(10)
      expect(formatted_authors[0]).to eq("SOUSA JUNIOR, Gilberto Ferreira de")
      expect(formatted_authors[1]).to eq("AJUNIOR, Gilberto Ferreira de Sousa")
      expect(formatted_authors[2]).to eq("CARVALHO, Gabriel")
      expect(formatted_authors[3]).to eq("ALINE")
      expect(formatted_authors[4]).to eq(false)
      expect(formatted_authors[5]).to eq(false)
      expect(formatted_authors[6]).to eq("SOUZA, Roberto Coelho")
      expect(formatted_authors[7]).to eq("JUNIOR")
      expect(formatted_authors[8]).to eq("BRITO FILHA, Amanda")
      expect(formatted_authors[9]).to eq("ANA")
    end

    it 'must return eight created authors' do
      formatted_authors = CreateAuthorsService.build(name_list)
      expect(Author.count).to eq(8)
    end

  end
  
end



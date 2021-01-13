require 'rails_helper'

RSpec.describe "Authors", type: :request do

  describe "Authors API" do
    describe "GET /authors" do

      before do
        FactoryBot.create(:author, name:"Gilberto Ferreira de Sousa Junior")
        FactoryBot.create(:author, name:"Aline teste")
      end

      it "returns all authors" do
        get "/api/v1/authors"

        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)["data"].size).to eq(2)
      end
      
    end

    describe "POST /authors/create_all" do
      it "create a new author" do
        expect {
          post "/api/v1/authors/create_all", params: { name_count:"3", name_list:["Gilberto ferreira de Sousa Junior", "Gabriel carvalho", "Ana"]} 
        }.to change {Author.count }.from(0).to(3)

        expect(JSON.parse(response.body)).to eq(["SOUSA JUNIOR, Gilberto Ferreira de", "CARVALHO, Gabriel", "ANA"])

        expect(response).to have_http_status(:ok)
      end
    end

    describe "POST /authors" do
      it "create a new author" do
        expect {
          post "/api/v1/authors", params: {author: {name: "Gilberto Ferreira de Sousa Junior"} }
        }.to change {Author.count }.from(0).to(1)
        expect(response).to have_http_status(:created)
      end
    end

    describe "DELETE /authors/:id" do
      let!(:author) {FactoryBot.create(:author, name:"Gilberto Ferreira de Sousa Junior")}

      it "delete a author" do
        expect { 
          delete "/api/v1/authors/#{author.id}"
        }.to change { Author.count }.from(1).to(0)
        expect(response).to have_http_status(:ok)
      end
    end
  end

end

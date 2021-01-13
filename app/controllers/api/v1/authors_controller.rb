module Api
  module V1
    class AuthorsController < ApplicationController

      before_action :validate_parameters, only: :create_all

      def index
        authors =  Author.order('name DESC')
        render json: {status: 'SUCCESS', message: 'Autores carregados', data: authors}, status: :ok
      end

      def create_all
        render json: CreateAuthorsService.build(params[:name_list]), status: :ok
      end

      def create 
        author = Author.new(author_params)

        if author.save
          render json: params, status: :created
        else
          render json: author.errors, status: :unproccessable_entuty
        end
      end

      def update
				author = Author.find(params[:id])
				if author.update(author_params)
					render json: {status: 'SUCCESS', message:'Autor atualizado', data:author},status: :ok
				else
					render json: {status: 'ERROR', message:'Autor não atualizado', data:author.erros},status: :unprocessable_entity
				end
			end

      def show
				author = Author.find(params[:id])
				render json: {status: 'SUCCESS', message:'Autor carregado', data:author},status: :ok
			end

      def destroy
				author = Author.find(params[:id])
				author.destroy
				render json: {status: 'SUCCESS', message:'Autor deletado', data:author},status: :ok
      end

      private

      def author_params
        params.require(:author).permit(:name)
      end

      def validate_parameters
        if params[:name_count].blank? || params[:name_list].blank?
          render json: {status: 'ERROR', message:'name_count(quantidade de nomes) e name_list(lista de nomes) devem estar presentes!', data:{}}, status: :unprocessable_entity
        elsif params[:name_count].to_i != params[:name_list].count
          render json: { status: 'ERROR', message:'Número de nomes fornecido inválido!', data:{name_count: params[:name_count].to_i, name_list: params[:name_list].count}}, status: :unprocessable_entity
        end
      end
    end
  end
end

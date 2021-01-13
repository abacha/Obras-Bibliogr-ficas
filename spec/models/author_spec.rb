require 'rails_helper'

RSpec.describe Author, type: :model do
  context 'validation' do
    it { should validate_presence_of(:name) }
    it { should validate_length_of(:name).is_at_least(3) }
  end
end

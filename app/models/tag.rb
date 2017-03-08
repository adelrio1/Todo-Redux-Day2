# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base

  validates :name, presence: true, uniqueness: true

  has_many :taggings

  has_many :todos,
    through: :taggings,
    source: :todo
end
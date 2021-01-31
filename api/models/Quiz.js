const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const quizSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		likes: { type: Number, default: 0 },
		creatorId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		categoryId: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		questions: [
			{ type: Schema.Types.ObjectId, ref: 'Question', required: true },
		],
		time: { type: Number, default: 10 },
		highScores: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
					required: true,
				},
				score: { type: Number, required: true },
			},
		],
	},
	{ timestamps: true }
);

quizSchema.plugin(mongoosePaginate);

module.exports = model('Quiz', quizSchema);
